module.exports = {
    dest:'dist',
    title: 'Yi-yezi blog',
    description:'Yi-yezi的个人博客',
    themeConfig: {
        repo: 'Yi-yezi',
        nav:[
            { 
                text:'HOME',
                link: `/` 
            },
            { 
                text:'文章分类',
                items: [
                    { text:'编程语言', link: '/PROGRAM_LANG/' },
                    { text:'SOCKET', link: '/SOCKET/' }
                ]
            },
            { 
                text:'关于',
                link: `/` 
            }
        ],
        sidebar: {
            '/PROGRAM_LANG/': [
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
      
            '/SOCKET/': [
              '',      /* /bar/ */
              'SOCKET1', /* /bar/three.html */
            ],
          }
    }
}