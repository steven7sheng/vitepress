function getGuideSidebar() {
    return [
        { text: 'Introduction',link: '/guide/index', },
        { text: 'Advanced',link: '/guide/advanced' }
    ];
}

function getConfigSidebar() {
    return [
        { text: 'App Config' },
        { text: 'Theme Config' }
    ];
}
module.exports = {
    base: "/vitepress/",
    themeConfig: {
        repo: 'steven7sheng/vitepress',
        docsDir: 'docs',
        editLinks: false,
        lastUpdated: 'Last Updated',

        nav: [
            { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
            { text: 'Config Reference', link: '/config/basics', activeMatch: '^/config/' },
            { text: 'VitePress', link: 'https://github.com/vuejs/vitepress' }
        ],
        sidebar: {
            '/guide/': getGuideSidebar(),
            '/config/': getConfigSidebar(),
            '/': getGuideSidebar()
        }
    }
}