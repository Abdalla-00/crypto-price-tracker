module.exports = {
    title: 'Crypto Price Tracker Documentation',
    tagline: 'Documentation for the Crypto Price Tracker Project',
    url: 'http://localhost',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Abdalla-00',
    projectName: 'crypto-price-tracker', // Replace with your repository name
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // Serve docs at the root URL
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/Abdalla-00/crypto-price-tracker/edit/main/docs/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
