module.exports = {
    dest:'./dist',
    title: 'Yi-yezi blog',
    description:'Yi-yezi的个人博客',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'Yi-yezi',
        nav:[
            { text:'主页', link: `/` },
            { text:'文档', link: `/docs/` },
            { text:'关于', link: `/about/` }
        ],
        sidebar: {
            '/docs/': [
                /*{
                  title: 'vue&vuepress',
                  collapsable: true,
                  children: [
                    'vue/page1',
                    'vue/page2',
                  ]
                },*/
                {
                  title: '计算机网络',
                  collapsable: true,
                  sidebarDepth: 2, 
                  children: [
                    'computerNetwork/page1',
                    'computerNetwork/page2',
                  ]
                },
                {
                  title: '编译原理',
                  collapsable: true,
                  sidebarDepth: 2, 
                  children: [
                    `complier/page1`,
                  ]
                },
                {
                  title: 'MITK',
                  collapsable: true,
                  sidebarDepth: 2, 
                  children: [
                    `mitk/page1`,
                    `mitk/page2`,
                    `mitk/page3`,
                    `mitk/page4`,
                  ]
                }
              ]
          }
    }
}