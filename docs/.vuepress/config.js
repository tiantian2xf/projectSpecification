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
      {text: '新人入职指南', link: '/rookieHandbook/'},
      {text: '编码规范', link: '/codingSpecification/' },//布局规范合并到编码规范
      {text: '开发规范', link: '/developmentProcess/'},
      // {text: '布局规范', link: '/UIDesignSpecification/'},
      {text: '文档模板', link: '/documentTemplate/'},
      {text: '仓库创建规范', link: '/warehouseCreationSpecification/'} ,
      {text: '日志规范', link: '/logSpecification/'} ,
      {text: '性能规范', link: '/performanceSpecification/'} ,
      {text: '工具Lint', link: '/toolLintSpecification/'} 
    ],
    sidebar:{
      // '/accumulate/': [
      //     {
      //       title: '前端积累',
      //       children: [
      //         '/accumulate/1.html',
      //         '/accumulate/2.html',
      //         '/accumulate/3.html',
      //         '/accumulate/4.html',
      //         '/accumulate/5.html',
      //         '/accumulate/6.html',
      //         '/accumulate/7.html',
      //         '/accumulate/8.html',
      //         '/accumulate/9.html',
      //         '/accumulate/10.html',
      //         '/accumulate/11.html',
      //       ]
      //     }
      //   ],
      //   '/algorithm/': [
      //     '/algorithm/', 
      //     {
      //       title: '第二组侧边栏下拉框的标题1',
      //       children: [
      //         '/algorithm/' 
      //       ]
      //     }
      //   ]
    },
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2
  }
};