module.exports = {
    title: 'CloudAction',
    base: '/public/docs/',
    dest: 'public/docs',
    description: 'Just playing around',
    search: false,
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Getting Started', link: '/gettingStarted/' }
        ],
        sidebar: {
            '/guide/': [
                {
                    title: 'Guide',
                    collapsable: false,
                    children: [
                        '',
                        'intro'
                    ]
                }
            ],
            '/gettingStarted/': [
                {
                    title: 'Getting Started',
                    collapsable: false,
                    children: [
                        '',
                    ]
                }
            ]

        }
    }
}