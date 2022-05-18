/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || "https://www.florianthom.com",
    generateRobotsTxt: true,
    exclude: [
        "/cv",
        "/discord",
        "/email",
        "/github",
        "/googledrive",
        "/imprint",
        "/linkedin",
        "/lol",
        "/paypal",
        "/qr",
        "/spotify",
        "/twitter",
        "/wishlist",
        "/xing",
    ],
    sitemapSize: 5000,
    robotsTxtOptions: {policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ["/api/*", "/swagger", "/imprint", "/impressum", "/qr"]
            }
        ]}
};
