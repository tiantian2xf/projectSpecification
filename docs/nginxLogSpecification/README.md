# Nginx日志规范

## ng配置
一般来说：nginx的log_format有很多可选的参数用于指示服务器的活动状态，默认的是：
```
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';
```                  

参数 | 说明
--------- | -------------                                         
$remote_addr | 客户端地址                                    
$remote_user | 客户端用户名称                               
$time_local | 访问时间和时区                               
$request | 请求的URI和HTTP协议                 
$http_host | 请求地址，即浏览器中你输入的地址（IP或域名）    
$status | HTTP请求状态 200
$upstream_status | upstream状态 200
$body_bytes_sent | 发送给客户端文件内容大小 
$http_referer | url跳转来源   
$http_user_agent | 用户终端浏览器等信息 设备信息
$ssl_protocol | SSL协议版本 TLSv1
$ssl_cipher | 交换数据中的算法 RC4-SHA
$upstream_addr | 后台upstream的地址，即真正提供服务的主机地址     
$request_time | 整个请求的总时间(s)
$upstream_response_time | 请求过程中，upstream响应时间

### 使用ng做AB测试  
AB测即一个产品几个版本,我们会将现网一小部分用户的访问引流到新版本nginx提供了“  
nginx_http_split_clients_module”、“nginx_stream_split_clients_module”分别简单实现了http和tcp的这些功能  

#### 简单使用 
```
http {
    split_clients "${remote_addr}AAA" $variant {
        0.5%    .one;
        2.0%    .two;
        *       "";
    }

    server {
        location / {
            index index${variant}.html;
	    }
	}
}
```

根据计算 0 到21474835 (0.5%) variant = .one  
21474836到107374180 (2%) variant = .two  
其余值为空值  
(* 号 不可用 剩余百分比来替代)  

#### 更好的方法 根据cookies 或者userID  
1、请求可以代理到任意空间  
2、设置cookie，给定一个期限做测试  
3、检测cookie是否能够按照正确的方式代理到指定的空间，从而确保统一的用户体验。  
这里我们假设有两个版本的应用，他们的服务端口分别为8888和9999，我们使用nginx给这两个版本做A/B测试，具体的配置如下  
```
http {
    # ...
    upstream old{
        server server 192.168.1.100:8888; 
    }

    upstream new{
        server server 192.168.1.100:9999;
    }
    split_clients "app${remote_addr}${http_user_agent}${date_gmt}"    $appversion {
        80%     old;
        *       new;
    }
    map $cookie_test_version $upstream_group {
        default $appversion;
        "old"  "old";
        "new" "new";
    }
	server {
        listen 80;
        location / {
            add_header Set-Cookie "test_version=$upstream_group;Path=/;Max-Age=518400;";
            proxy_set_header Host $host;
            if ($upstream_group = "old") {
                proxy_pass http://192.168.1.100:8888;
                break;
            }
          if ($upstream_group = "new") {
                proxy_pass http://192.168.1.100:9999;
                break;
            }
          proxy_pass http://$appversion;
        }
    }
}
```

### 规范, 方式和目的  
1.日志格式统一，可以极大的简化日志收集和分析的复杂度；  
2.排查问题更加便捷；  
3.为了避免日志格式的变化给所有相关团队带来干扰，降低改动的影响面，日志中的字段进行分“域”；  
每个域包括多个字段，不同的团队关注不同的域，某个域中的字段列表改动时，不影响其他团队对数据的使用；  
4.为了便于数据分拣、日志收集，我们约定所有的日志文件名必须遵循统一规则;nginx日志、tomcat access log、业务日志等，日志的文件名遵循：```<project-name>.<tag>.log.<yyyy-MM-dd>.<index>  ``` ； 
5.严格控制日志文件的大小，适时对日志文件进行rolling，我们约定任何日志文件的大小不得超过256M，超过此值时应该对日志进行rolling。原因非常简单，较大的日志文件既不便于收集、传输，也不便于进行查看，此外较大的日志还会降低文件IO的效率。在此基础上，我们要求在打印日志时需要对日志信息进行合理规划，尽可能精简日志信息，冗杂而庞大的日志信息不仅价值较低，而且消耗存储，此外较大的日志内容输出还会增加宿主机器的IO负载，毕竟我们的普通的application机器的IOPS通常不高；  
6.为了便于日志分拣、日志内容的可读性、本地性，我们在nginx、tomcat等所有日志内容中，都打印“当前机器的IP”、“日志产生的时间戳”等标记信息。
