module.exports = {
  title: '前端开发规范',
  description: 'Front-end Development Specification',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    // ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    // ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav:[ // 导航栏配置
      // 大概的写了一点，这两周在做临时上线的需求，和1.4的UI走查，没花太多时间写
      // 分了八类：
      // 开发流程规范：需求开发流程、缺陷修复指派流程、上线流程
      // 项目文档：readme
      // 新人手册：开发工具、环境、VPN申请、JCI账号申请
      // 编码规范：命名、文件目录...
      // 日志规范
      // 仓库&分支创建流程及规范
      // 开发工作版本
      // Nginx日志规范
      {text: '新人手册', link: '/rookieHandbook/'},
      {text: '编码规范', link: '/codingSpecification/'},
      {text: 'UI规范', link: '/UIDesignSpecification/'},
      {text: '开发规范', link: '/developmentProcess/' },
      {text: '项目文档', link: '/readmeProcess/'},
      {text: '日志规范', link: '/logSpecification/'} ,
      {text: '仓库&分支规范', link: '/warehouseBranchSpecification/'} ,
      {text: '开发版本规范', link: '/developmentVersionSpecification/'} ,
      {text: 'Nginx日志规范', link: '/nginxLogSpecification/'} 
    ],
    // sidebar:{
    //   '/accumulate/': [
    //       {
    //         title: '前端积累',
    //         children: [
    //           '/accumulate/1.html',
    //           '/accumulate/2.html',
    //           '/accumulate/3.html',
    //           '/accumulate/4.html',
    //           '/accumulate/5.html',
    //           '/accumulate/6.html',
    //           '/accumulate/7.html',
    //           '/accumulate/8.html',
    //           '/accumulate/9.html',
    //           '/accumulate/10.html',
    //           '/accumulate/11.html',
    //         ]
    //       }
    //     ],
    //     '/algorithm/': [
    //       '/algorithm/', 
    //       {
    //         title: '第二组侧边栏下拉框的标题1',
    //         children: [
    //           '/algorithm/' 
    //         ]
    //       }
    //     ]
    // },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};