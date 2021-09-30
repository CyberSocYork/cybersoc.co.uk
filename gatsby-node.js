const { create } = require("domain");
const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");

  const result = await graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    return console.log(result.errors);
  }

  const posts = result.data.postsRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
    });
  });

  // Create copies of the newsletter signup page at different URLs.
  const registrationPages = ["email", "register"];
  const registrationTemplate = path.resolve("src/pages/newsletter.js");

  registrationPages.forEach((slug) => {
    createPage({
      path: slug,
      component: registrationTemplate,
    });
  });
};
