/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `CyberSoc`,
    siteUrl: `https://www.cybersoc.co.uk`,
    description: `The official website for CyberSoc, the University of York's Cyber Security Society.`,
  },
  plugins: [
	  `gatsby-plugin-react-helmet`,
	  {
		  resolve: `gatsby-source-filesystem`,
		  options: {
			  name: `posts`,
			  path: `${__dirname}/src/markdown-posts`
		  }
	  },
	  `gatsby-transformer-remark`
  ]
}