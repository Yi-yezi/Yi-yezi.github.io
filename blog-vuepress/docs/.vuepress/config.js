module.exports = {
    dest:'dist',
    title: 'Yi-yezi blog',
    description:'Yi-yezi的个人博客',
    themeConfig: {
        lastUpdated: '上次更新',
        repo: 'Yi-yezi',
        nav:[
            { 
                text:'HOME',
                link: `/` 
            },
            { 
                text:'文章分类',
                items: [
                    { text:'编程语言', link: '/program_lang/' },
                    { text:'其他', link: '/others/' }
                ]
            },
            { 
                text:'关于',
                link: `/others/` 
            }
        ],
        sidebar: {
            '/program_lang/': [
                '',
                {
                    title: 'C++',
                    children: [
                        ['./cpp/cpp','dssf'],
                    ]
                },
                {
                    title: 'python',
                    children: [
                        ['./python/python','df']
                    ]
                },
                
            ],
            '/others/': [   
                ''
              ],
          }
    }
}