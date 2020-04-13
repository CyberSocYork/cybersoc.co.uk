import React from "react";
import { Helmet } from "react-helmet";

// Components
import Navbar from "../components/navbar/navbar.js";
import Footer from "../components/footer/footer.js";
import PostLink from "../components/postLink/postLink.js";

import "../styles/blog/blog.css";

const BlogIndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Posts = edges.map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

    return (
        <div class="site">
            <Helmet>
                <title>Blog / CyberSoc York</title>
            </Helmet>
            <Navbar />
            <div className="container content">
                <div className="row my-5">
                    <div className="col">
                        <h1>Blog</h1>
                        {Posts}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogIndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 350)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        author
                    }
                }
            }
        }
    }
`;
