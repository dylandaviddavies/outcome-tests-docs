module.exports = {
    title: "Outcome Automated Testing",
    description: "Documentation",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' }
        ],
        displayAllHeaders: true,
        sidebarDepth:2,
        sidebar: {
            '/guide/': [
              ''
            ],      
            '/outcome/': [
                ''
            ],
            '/data/': [
                {
                    title: 'Data',
                    path: '',
                    children:[
                        ['', 'Introduction'],
                        'df-answer',
                        'df-question-types'
                    ]
                }
            ],
            '/tests/': [
                {
                    title: 'Tests',
                    path: '',
                    children:[
                        'DfAllQuestionsTest'
                    ]
                }
            ]
          }
    }
}