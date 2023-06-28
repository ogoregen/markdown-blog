
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {

    siteMetadata: {

        title: "flighty",
        description: ``,
        image: `/gatsby-icon.png`,
        siteUrl: "https://ogoregen.com",
    },

    plugins: [

        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        `gatsby-transformer-sharp`,
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

                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {

                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {

                            maxWidth: 1200,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: "language-",
                        },
                    },
                ],
            },
        },
    ]
};
