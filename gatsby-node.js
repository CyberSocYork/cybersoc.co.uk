const path = require("path");

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;
    
    const blogPostTemplate = path.resolve("src/templates/blogTemplate.js");

    const result = await graphql(`
        {
            allMarkdownRemark(
                sort: {
                    order: DESC,
                    fields: [frontmatter___date]
                }
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
    `)

    // Handle errors
    if (result.errors) {
        return console.log(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
        })
    })
}