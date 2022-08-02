/* eslint-disable quotes */
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteUrl = `https://www.cybersoc.co.uk`;

module.exports = {
  siteMetadata: {
    title: `CyberSoc`,
    siteUrl: siteUrl,
    description: `The official website for CyberSoc, the University of York's Cyber Security Society.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                js: "javascript",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
        }
        `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path }) => {
          return {
            url: path,
          };
        },
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
        url: "https://cybersoc-event-server.herokuapp.com/events",
        rootKey: "events",
        schemas: {
          events: `
            title: String
            description: String
            datetime: String
            location: String
          `,
        },
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "~": "src",
        },
      },
    },
  ],
};
