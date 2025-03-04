module.exports = {
    title: 'Crypto Price Tracker Documentation',
    tagline: 'Documentation for the Crypto Price Tracker Project',
    url: 'http://localhost',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'your-github-username', // Replace with your GitHub username
    projectName: 'crypto-price-tracker', // Replace with your repository name
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // Serve docs at the root URL
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/your-github-username/crypto-price-tracker/edit/main/docs/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
