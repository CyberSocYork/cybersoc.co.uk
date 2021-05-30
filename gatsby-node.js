/* eslint-disable no-undef */
// const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve("./src/templates/blogTemplate.js");

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
};

// exports.onCreateNode = async ({ node, actions, store, getCache, createNodeId }) => {
//   // Only perform the following action on committee images which are hosted remotely.
//   if (node.internal.type !== "CommitteeJson" && !/^https?:\/\//.test(node.image)) return;

//   console.log(node);

//   const { createNode } = actions;

//   /* Download the image and create the File node. Using gatsby-plugin-sharp and gatsby-transformer-sharp the node will become an ImageSharp. */
//   const fileNode = await createRemoteFileNode({
//     url: node.image, // string that points to the URL of the image
//     parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//     store, // Gatsby's redux store
//     getCache, // get Gatsby's cache
//     createNode, // helper function in gatsby-node to generate the node
//     createNodeId: (id) => `committeePhoto-${id}`, // helper function in gatsby-node to generate the node id
//   });

//   console.log(fileNode);

//   if (fileNode) {
//     // link the File node to Image node at field image
//     node.image___NODE = fileNode.id;
//   }
// };
