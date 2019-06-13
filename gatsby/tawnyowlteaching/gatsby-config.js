module.exports = {
    siteMetadata: {
        title: `TawnyOwlTeaching`,
        description: `Teach your child the numeracy and 
            literacy skills to get ahead at school.`,
        author: `James Reid`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `TawnyOwlTeaching`,
                short_name: `TawnyOwl`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
    ]
    /*
    Note gatsby-plugin-manifest must be listed BEFORE gatsby-plugin-offline 
    when used in conjunction. 
    See https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/ for more info.
    */
}
