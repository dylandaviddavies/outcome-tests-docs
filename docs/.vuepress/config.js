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
];

var outcome = [
    ''
];

var tests = [
    {
        collapsable: false,
        title: 'Tests',
        path: '',
        children: [
            'AlumniLoginTest',
            'DfAllQuestionsTest',
            'EmployerLoginTest',
            'ExpCreateOpportunityTest',
            'ExpCreateTermCourseTest',
            'GeCreateAdvancedEventTest',
            'GeCreateRegisterableSimpleEventTest',
            'GeCreateSimpleEventTest',
            'GeCreateSimpleMultidayEventTest',
            'NpCreateJobTest',
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
    '/outcome/': outcome,
    '/tests/': tests,
    '/model/': model
};

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
        sidebar: sidebar
    }
}