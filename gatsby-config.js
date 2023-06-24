/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

    siteMetadata: {

        title: "flighty",
        description: "Example project for the Gatsby Head API",
        siteUrl: "https://ogoregen.com",
    },

    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        `gatsby-transformer-sharp`, // Needed for dynamic images
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [{
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1200,
                    },
                },],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "blog_posts",
                path: `${__dirname}/blog_posts`,
            },
        },
        {
            resolve: "gatsby-plugin-preconnect",
            options: {
                domains: [
                    {domain: "https://rsms.me/", crossOrigin: false},
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              icon: `src/images/icon.png`, // This path is relative to the root of the site.
            },
        },
    ]
}
