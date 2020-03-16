var guide = [
    {
        collapsable: false,
        title: 'Guide',
        path: '',
        children: [
            ['', 'Introduction'],
            'runsettings',
            'azure'
        ]
    }
];;

var development = [
    {
        collapsable: false,
        title: 'Development',
        path: '',
        children: [
            ['', 'Introduction'],
            'data-source',
            'page-objects'
        ]    
    }
];

var tests = [
    {
        collapsable: false,
        title: 'Tests',
        path: '',
        children: [
            'AlumniLoginTest',
            'CcCreateActivityPositionTest',
            'DfAllQuestionsTest',
            'DocCreateDashboardPackageTest',
            'DocUploadToDashboardTest',
            'EmployerLoginTest',
            'ExpCreateOpportunityTest',
            'ExpCreateTermCourseTest',
            'GeCreateAdvancedEventTest',
            'GeCreateRegisterableSimpleEventTest',
            'GeCreateSimpleEventTest',
            'GeCreateSimpleMultidayEventTest',
            'NpApplyTest',
            'NpCreateJobTest',
            'NpShortlistTest',
            'NpStudentJobKeywordSearchFilterTest',
            'PortalStaffDashboardAddScheduledOrgTaskTest',
            'PortalStaffDashboardAddUnscheduledOrgTaskTest',
            'PortalStaffLoginTest',
            'PortalUserLoginTest',
            'RegisterApproveEmployerTest',
            'RegisterEmployerCopyDivToContactTest',
            'RegisterEmployerCopyOrgToDivTest',
            'SaCreateAvailableSlotTest',
            'SaCreateOpenSlotTest',
            'StaffFacultyLoginTest',
            'StudentLoginTest'
        ]
    }
];

var model = [
    {
        collapsable: false,
        title: 'Model',
        path: '',
        children: [
            ['', 'Introduction'],
            'name-value-pair',
            {
                title: 'Internationalization',
                path: 'internationalization',
                children: [
                    ['internationalization', 'Introduction'],
                    'translations'
                ]
            },
            {
                title: 'Events',
                path: 'ge',
                children: [
                    ['ge', 'Introduction'],
                    'ge-reg-type-option-fee-type'
                ]
            },
            {
                title: 'Job Forms',
                path: 'np-forms',
                children: [
                    ['np-forms', 'Introduction'],
                    'np-question',
                    'np-question-type',
                    {
                        title: 'Job Form Answer',
                        path: 'np-answer/',
                        children: [
                            ['np-answer', 'Introduction'],
                            'np-text-answer',
                            'np-large-text-answer',
                            'np-single-choice-dropdown-answer',
                            'np-single-choice-radio-answer',
                            'np-multi-choice-answer',
                            'np-date-answer',
                            'np-number-answer'
                        ]
                    }
                ]
            },
            {
                title: 'User Registration Forms',
                path: 'acrm-forms',
                children: [
                    ['acrm-forms', 'Introduction'],
                    'acrm-question',
                    'acrm-question-type',
                    {
                        title: 'User Registration Form Answer',
                        path: 'acrm-answer/',
                        children: [
                            ['acrm-answer', 'Introduction'],
                            'acrm-text-answer',
                            'acrm-large-text-answer',
                            'acrm-date-answer',
                            'acrm-datetime-answer',
                            'acrm-time-answer',
                            'acrm-number-answer',
                            'acrm-email-signature-answer',
                            'acrm-email-opt-in-answer',
                            'acrm-email-campaign-opt-in-answer',
                            'acrm-multi-choice-answer',
                            'acrm-single-choice-answer'
                        ]
                    }
                ]
            },
            {
                title: 'Dynamic Forms',
                path: 'df',
                children: [
                    ['df', 'Introduction'],
                    'df-question',
                    'df-question-type',
                    {
                        title: 'Dynamic Form Answer',
                        path: 'df-answer/',
                        children: [
                            ['df-answer', 'Introduction'],
                            'df-text-answer',
                            'df-multilingual-text-answer',
                            'df-large-text-answer',
                            'df-multilingual-large-text-answer',
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
];

var sidebar = {
    '/guide/': guide,
    '/development/': development,
    '/tests/': tests,
    '/model/': model
};

module.exports = {
    base: '/outcome-tests-docs/',
    title: "Outcome Automated Testing",
    description: "Documentation",
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }]
    ],
    themeConfig: {
        logo: "http://media.orbiscommunications.com/IMG/BRAND2020/ORBIS-ICON-OUTCOME-BLACK.svg",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Development', link: '/development/' },
            { text: 'Tests', link: '/tests/' },
            { text: 'Model', link: '/model/' },
            //{ text: 'Outcome', link: '/outcome/' }
        ],
        sidebar: sidebar
    }
}