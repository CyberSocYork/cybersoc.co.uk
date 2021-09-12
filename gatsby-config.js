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
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@content": "src/content",
          "@theme": "src/theme",
          "@styles": "src/styles",
          "@images": "src/img",
        },
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
      resolve: `gatsby-source-google-calendar`,
      options: {
        calendarIds: ["yusu.org_064dvl32moi395bhp0immkr4g4@group.calendar.google.com"],
        // options to retrieve the next 10 upcoming events
        timeMin: new Date().toISOString(),
        maxResults: 3,
        singleEvents: true,
        orderBy: "startTime",
      },
    },
  ],
};
