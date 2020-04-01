import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import PostLink from "../components/postLink/postLink.js";

// import "../styles/blog/blog.css";

const BlogIndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges
        //.filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
        .map((edge) => <PostLink key={edge.node.id} to={edge.node} />);
    return <div>{Posts}</div>;
};

export default BlogIndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                    }
                }
            }
        }
    }
`;
