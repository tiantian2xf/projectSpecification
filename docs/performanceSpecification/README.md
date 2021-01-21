# 性能规范
## 内容部分
### 1.尽量减少HTTP请求数
80%的终端用户响应时间都花在了前端上，其中大部分时间都在下载页面上的各种组件：图片，样式表，脚本，Flash等等。减少组件数必然能够减少页面提交的HTTP请求数。这是让页面更快的关键
##### 合并文件
是通过把所有脚本放在一个文件中的方式来减少请求数的，当然，也可以合并所有的CSS。如果各个页面的脚本和样式不一样的话，合并文件就是一项比较麻烦的工作了，但把这个作为站点发布过程的一部分确实可以提高响应时间。
##### 行内图片（Base64编码）
用data: URL模式来把图片嵌入页面。这样会增加HTML文件的大小，把行内图片放在（缓存的）样式表中是个好办法，而且成功避免了页面变“重”。

### 2.让Ajax可缓存
主流浏览器都有缓存机制，主要基于HTTP协议定义的缓存策略。对于一定时间内不发生变动的文档缓存起来，对于下次请求，就可以直接返回缓存的结果。使用缓存有以下好处：  

1）减少冗余的数据传输，节省网络流量成本；    
2）减少加载时间，客户能够快速加载页面；  
3）减少对服务端的压力，避免过载。

HTTP协议通过Header来控制缓存的，包括请求和响应，响应缓存主要通过Expires头和Cache-control头来控制。下面按优先级由高到列出一些常见的缓存策略，：

Cache-Control:no-store 不要缓存这个文档；  
Cache-Control:no-cache 保存文档，但是需要与服务端再验证才能使用；  
Cache-control:max-age 缓存最长保存时间，单位是秒；   
Expires:日期 根据日期判断过期，由于客户端和服务器日期可能不同步，不推荐使用。  

### 3.http压缩
采用Gzip压缩：HTTP 压缩就是以缩小体积为目的，对 HTTP 内容进行重新编码的过程，原理是找出一些重复出现的字符串、临时替换它们，从而使整个文件变小，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大

### 4.给Cookie减肥
使用cookie的原因有很多，比如授权和个性化。HTTP头中cookie信息在web服务器和浏览器之间交换。重要的是保证cookie尽可能的小，以最小化对用户响应时间的影响。

1）清除不必要的cookie；  
2）保证cookie尽可能小，以最小化对用户响应时间的影响；  
3）注意给cookie设置合适的域级别，以免影响其它子域；  
4）设置合适的有效期，更早的有效期或者none可以更快的删除cookie，提高用户响应时间。

### 5.webpack
充分利用webpack提供给我们的能力，利用DllPlugin与commonPlugins等插件对我们代码进行优化，文件的分割与合并，公共代码的提取，长缓存等策略。

### 6.异步加载组件
可根据相对应的库去针对做不同的异步组件加载方案。

### 7.减少DOM元素的数量
一个复杂的页面意味着要下载更多的字节，而且用JavaScript访问DOM也会更慢。举个例子，想要添加一个事件处理器的时候，循环遍历页面上的500个DOM元素和5000个DOM元素是有区别的。  

DOM元素的数量很容易测试，只需要在Firebug的控制台里输入：

``` js
document.getElementsByTagName('*').length
```

### 8.尽量少用iframe

用iframe可以把一个HTML文档插入到父文档里，重要的是明白iframe是如何工作的并高效地使用它。

iframe的优点：  
1）引入缓慢的第三方内容，比如标志和广告；  
2）安全沙箱；  
3）并行下载脚本。  

iframe的缺点：  
1）代价高昂，即使是空白的iframe；  
2）阻塞页面加载；  
3）非语义。

## CSS部分

### 9.避免使用CSS表达式
用CSS表达式动态设置CSS属性，是一种强大又危险的方式。从IE5开始支持，但从IE8起就不推荐使用了。例如，可以用CSS表达式把背景颜色设置成按小时交替的：
``` css
background-color: expression( (new Date()).getHours()%2 ? "#B8D4FF" : "#F08A00" );
```

### 10.选择<link>舍弃@import
href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，如果我们在文档中添加
``` html
<link href=”common.css” rel=”stylesheet”/>
```
那么浏览器会识别该文档为css文件，就会**并行下载**资源并且不会停止对当前文档的处理。

这也是为什么建议使用link方式来加载css，而不是使用@import方式，@import需要页面网页完全载入以后加载。

两者都是外部引用CSS的方式，但是存在一定的区别：

　　1）link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。

　　2）link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。

　　3）link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。

　　4）ink支持使用Javascript控制DOM去改变样式；而@import不支持。

### 11.将样式表放在顶部

### 12.使用外部CSS
纯粹而言，内联快一些。但现实中还是使用外部文件会产生较快的页面。因为CSS文件有机会被浏览器缓存起来。HTML文档通常不会被配置为可以缓存。另外，由于外联，HTML文档减小，HTTP请求的数量也不会增加

## JS部分

### 13.把JS脚本放在底部
- 普通模式，JS 会阻塞浏览器，浏览器必须等待 index.js 加载和执⾏完毕才能去做其它事情。一般将此类js放在在body标签的底部，减少对整个页面下载的影响

``` html
<script src="index.js"></script>
```

- async 模式：JS 不会阻塞浏览器做任何其它的事情。它的加载是异步的，当它加载结束，JS 脚本会⽴即执⾏。

``` html
<script async src="index.js"></script>
```

- defer 模式：JS 的加载是异步的，执⾏是被推迟的。等整个⽂档解析完成DOMContentLoaded 事件即将被触发时，被标记了defer 的 JS ⽂件才会开始依次执⾏

``` html
<script defer src="index.js"></script>
```

⼀般当我们的脚本与 DOM 元素和其它脚本之间的依赖关系不强时，我们会选⽤ async；当脚本依赖于 DOM
元素和其它脚本的执⾏结果时，我们会选⽤ defer。
### 14.尽量减少DOM访问，避免对象里没必要的DOM引用
用JavaScript访问DOM元素是很慢的，所以，为了让页面反应更迅速，应该：

1）缓存已访问过的元素的索引；  
2）先在JS中更新完所有节点，一次性把它们添到DOM树上；  
3）避免用JavaScript修复布局问题。

``` js
//没有缓存dom
for (let i = 0; i < document.getElementsByTagName('p').length; i++) {

}

//缓存dom
var p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {

}

//合并DOM插入
var listNode = document.getElementById('list');
var flag = document.createDocumentFragment();
var li;
for (let i = 0; i < 10; i++) {
    li = document.createElement('li');
    li.innerHTML = i;
    flag.appendChild(li);
}
listNode.appendChild(flag);

// 10次dom插入 ---> 1次dom插入
```

### 15.避免使用eval
使用eval会加大开销因为每一次脚本引擎调用他们是必须将源码转换成可执行代码，字符串会在执行时被打断

### 16.避免使用with，避免使用全局变量

### 17.事件节流
监听文字改变事件，无操作100毫秒后执行操作，不用每次触发。事件节流主要用于触发频率较高的事件，设定一个缓冲触发事件。
``` js
var textarea = document.getElementById('ta');
var timeoutId;
textarea.addEventListener('keyup',function(){
    if(i){
        clearTimeout(i);
    }
    timeoutId = setTimeout(() => {
        //操作
    }, 100);
});
```

### 18.图片延迟加载
在页面中，先不给图片设置路径，只有当图片出现在浏览器的可视区域时，才去加载真正的图片，这就是延迟加载。对于图片很多的网站来说，一次性加载全部图片，会对用户体验造成很大的影响，所以需要使用图片延迟加载。

### 19.降低图片质量
例如 JPG 格式的图片，100% 的质量和 90% 质量的通常看不出来区别，尤其是用来当背景图的时候。我经常用 PS 切背景图时， 将图片切成 JPG 格式，并且将它压缩到 60% 的质量，基本上看不出来区别。  

压缩方法有两种，一是通过 webpack 插件 image-webpack-loader，二是通过在线网站进行压缩。

``` js
{
  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
  use:[
    {
    loader: 'url-loader',
    options: {
      limit: 10000, /* 图片大小小于1000字节限制时会自动转成 base64 码引用*/
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    /*对图片进行压缩*/
    {
      loader: 'image-webpack-loader',
      options: {
        bypassOnDebug: true,
      }
    }
  ]
}
```

### 20.if-else 对比 switch
当判断条件数量越来越多时，越倾向于使用 switch 而不是 if-else。
``` js
if (color == 'blue') {

} else if (color == 'yellow') {

} else if (color == 'white') {

} else if (color == 'black') {

} else if (color == 'green') {

} else if (color == 'orange') {

} else if (color == 'pink') {

}

switch (color) {
    case 'blue':

        break
    case 'yellow':

        break
    case 'white':

        break
    case 'black':

        break
    case 'green':

        break
    case 'orange':

        break
    case 'pink':

        break
}
```
像以上这种情况，使用 switch 是最好的。假设 color 的值为 pink，则 if-else 语句要进行 7 次判断，switch 只需要进行一次判断。 从可读性来说，switch 语句也更好。  
 
从使用时机来说，当条件值大于两个的时候，使用 switch 更好。不过 if-else 也有 switch 无法做到的事情，例如有多个判断条件的情况下，无法使用 switch。

### 21.使用 requestAnimationFrame 来实现视觉变化
多数设备屏幕刷新率为 60 次/秒，也就是说每一帧的平均时间为 16.66 毫秒。在使用 JavaScript 实现动画效果的时候，最好的情况就是每次代码都是在帧的开头开始执行。而保证 JavaScript 在帧开始时运行的唯一方式是使用 requestAnimationFrame。

``` js
function updateScreen(time) {
  // Make visual updates here.
}

requestAnimationFrame(updateScreen);
```

### 22.使用 transform 和 opacity 属性更改来实现动画
在 CSS 中，transforms 和 opacity 这两个属性更改不会触发重排与重绘，它们是可以由合成器（composite）单独处理的属性。

### 23.不要覆盖原生方法
无论你的 JavaScript 代码如何优化，都比不上原生方法。因为原生方法是用低级语言写的（C/C++），并且被编译成机器码，成为浏览器的一部分。当原生方法可用时，尽量使用它们，特别是数学运算和 DOM 操作。






