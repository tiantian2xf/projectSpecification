# 开发流程规范
## 概述
开发流程规范旨在让研发人员知道在某一需求的整个开发流程中，有哪些阶段？各阶段要做什么事？要注意哪些问题？

## 关于
需求开发的整个流程中分三个阶段，分别为 开发准备阶段、开发过程阶段、开发产出阶段

### 开发准备阶段
::: tip 提示
BRD文档和PRD文档评审前，开发人员需提前研读一遍，并记录发现的相关问题，据此提高评审效率及质量。
:::
1、BRD沟通

BRD沟通：与产品、客户端、后端、交互讨论需求在技术层面能否实现，如果现有方案不能实现，是否有替代方案，需要哪些支持。

2、PRD评审、UI&UX评审

PRD评审和UI&UX评审应该是一起的。

对前端而言要达到以下几个目标：

1）明确有多少个页面，有多少个弹窗，有没有动画<br/>
2）各页面之间的交互流程<br/>
3）页面UI的样式是否有兼容性问题<br/>
3）每个页面有几个接口，每个接口的作用及调用时机<br/>
4）各页面有哪些字段需要显示，显示字段是来自接口响应数据还是来自上一个页面传入，且显示字段格式及类型要求、input框的校验规则<br/>
5）涉及到某些操作前端处理是否合理，如：复杂数据排序、数据脱敏等类似处理<br/>
6）如涉及到三语配置，需要求产品提供三语提供的具体时间<br/>

3、工作量评估&项目排期

依据prd评审中页面数量及逻辑复杂度评估开发时间、接口联调时间，如需配置三语，再加上配置三语的时间就是开发的工作量。

4、前端概要设计
目的在于要让研发对需求中各功能的逻辑思路有一个大概的了解，且要达到以下几个目标：

1）了解到所有页面的跳转流程<br/>
2）页面中接口请求时机，接口入参从哪里获取，接口出参，页面数据渲染，接口报错处理<br/>
3）页面中有哪些操作，操作中是否涉及到接口请求<br/>

5、服务端接口文档评审

1）明确有多少个接口，各接口的意义<br/>
2）明确接口的请求方式、接口地址、接口网关<br/>
3）明确接口的入参及出参，入参、出参中各参数的类型，以及入参的来源<br/>

6、测试用例评审

依据prd文档对测试提供的测试用例进行评审，并记录问题。了解测试用例是否与prd文档上的需求是否一致，或者测试用例中是否有自己遗漏的功能点


### 开发过程阶段
1、页面开发(画 UI）

1）根据页面UI确定页面适合哪种布局<br/>
2）对页面进行组件模块化分类<br/>
3）分析页面中是否有组件可以公共化，提升开发效率<br/>

2、逻辑开发
1）页面数据渲染（接口请求、接口响应、响应数据处理）
2）页面中有哪些操作（如input输入框、点击操作、）
### 开发产出阶段
1、自测联调

2、showCase提测

3、总结分享
（1）遇到的问题和解决方案

（2）代码评审codeReview
   



