/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Cloud Nine - Techtest frontend`,
    description: `Technical test fort frontend application to Cloud Nine`,
    author: `contact@simonlager.com`,
  },
  pathPrefix: `/dev/cloudnine-techtest-frontend`,
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `cloudnine-techtest-frontend`,
        short_name: `cloudnine-techtest-frontend`,
        start_url: `/dev/cloudnine-techtest-frontend`,
        background_color: `#fff`,
        theme_color: `#b69f58`,
        display: `standalone`,
        icon: `src/icons/icon.svg`,
      },
    },
  ],
}
