module.exports = {
    base: '/outcome-tests-docs/',
    title: "Outcome Automated Testing",
    description: "Documentation",
    themeConfig: {
        logo: "https://camo.githubusercontent.com/436c1e38d32abdcdda228b88753975829e47daac/687474703a2f2f6d656469612e6f72626973636f6d6d756e69636174696f6e732e636f6d2f494d472f4f5554434f4d455f4d41535445525f49445f5247425f5356472e737667",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Tests', link: '/tests/' },
            { text: 'Model', link: '/model/' },
            { text: 'Outcome', link: '/outcome/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    collapsable: false,
                    title: 'Guide',
                    path: '',
                    children: [
                        {
                            title: 'Introduction',
                            path: ''
                        }
                    ]
                }
            ],
            '/outcome/': [
                ''
            ],
            '/model/': [
                {
                    collapsable: false,
                    title: 'Model',
                    path: '',
                    children: [
                        ['', 'Introduction'],
                        {
                            title: 'Dynamic Forms',
                            path: 'df',
                            children: [
                                ['df', 'Introduction'],
                                ['df-question', 'Question'],
                                ['df-question-type', 'Question Type'],
                                {
                                    title: 'Answer',
                                    path: 'df-answer/',
                                    children: [
                                        'df-text-answer',
                                        'df-large-text-answer',
                                        'df-boolean-answer',
                                        'df-date-answer',
                                        'df-float-answer',
                                        'df-number-single-choice-answer',
                                        'df-number-text-answer',
                                        'df-matrix-single-choice-answer',
                                        'df-matrix-multi-choice-answer',
                                        'df-start-end-date-answer',
                                        'df-hyperlink-answer',
                                        'df-rating-answer',
                                        'df-time-commitment-answer',
                                        'df-single-choice-answer',
                                        'df-multi-choice-answer',
                                        'df-frequency-answer',
                                        'df-salary-answer',
                                        'df-site-visit-answer'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            '/tests/': [
                {
                    collapsable: false,
                    title: 'Tests',
                    path: '',
                    children: [
                        'DfAllQuestionsTest'
                    ]
                }
            ]
        }
    }
}