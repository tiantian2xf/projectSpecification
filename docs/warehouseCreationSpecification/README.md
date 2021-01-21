# 仓库创建规范

## 创建git仓库步骤：

### 1、首先登陆Github账号
::: tip 提示
如果没有就申请一个github账号
:::
### 2、登陆成功后
![](./images/gitCreateProject/step1.png)

鼠标移动到头像位置，选中“Your profile”进入以下界面
![](./images/gitCreateProject/step2.png)
### 3、然后选中
![](./images/gitCreateProject/step3.png)
### 4、进入到
![](./images/gitCreateProject/step4.png)
### 5、创建成功后进入到
![](./images/gitCreateProject/step5.png)
### 6、然后在磁盘里面创建一个文件夹保存相关代码
![](./images/gitCreateProject/step6.png)
### 7、然后打开这个文件夹，鼠标右键点击
![](./images/gitCreateProject/step7.png)

鼠标右键点击 Git Bash Here,打开终端，输入git clone 仓库地址

![](./images/gitCreateProject/step8.png)

::: tip 提示
注意: 仓库地址选择
:::

![](./images/gitCreateProject/step9.png)

### 8、回车，项目拉去成功
此时你会发现你的文件夹里多了几个文件

![](./images/gitCreateProject/step10.png)
### 9、接下来打开
![](./images/gitCreateProject/step11.png)
### 10、进入
![](./images/gitCreateProject/step12.png)
### 11、然后新建一个文件，随便写入一些内容测试，形如：
![](./images/gitCreateProject/step13.png)
### 12、然后再git终端输入：cd 项目文件夹名称
![](./images/gitCreateProject/step14.png)
### 13、回车执行，再输入：git add 新建文件夹名称
![](./images/gitCreateProject/step15.png)
### 14、回车执行，再输入：git config –global user.name “用户设置的名称”
![](./images/gitCreateProject/step16.png)
### 15、回车执行，再输入：git config –global user.email “用户的邮箱”
![](./images/gitCreateProject/step17.png)
### 16、回车执行再次输入：git commit -m “描述提交的内容”
![](./images/gitCreateProject/step18.png)
### 17、回车执行再次输入：git pull origin master
![](./images/gitCreateProject/step19.png)
### 18、回车执行，最后输入：git push origin master
![](./images/gitCreateProject/step20.png)
代表执行成功
::: tip 提示
注意：如果是首次输入上面一行命令会有一个github弹框，输入你的github账号及密码就好了
:::
### 19、最后你刷新一下该项目github界面你会发现：
![](./images/gitCreateProject/step21.png)

以上就是自己建立Git代码仓库的全部步骤，如有疑问欢迎留言。

## 提交代码到远程仓库








