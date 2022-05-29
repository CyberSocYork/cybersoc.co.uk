/* eslint-disable no-undef */
const path = require("path");

const kebabCase = require("lodash/kebabCase");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("src/templates/blogTemplate.tsx");
  const tagTemplate = path.resolve("src/templates/tags.tsx");

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
              tags
            }
          }
        }
      }

      tagsGroup: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        limit: 2000
      ) {
        group(field: frontmatter___tags) {
          fieldValue
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

  // Extract tag data from query
  const tags = result.data.tagsGroup.group;

  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
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
