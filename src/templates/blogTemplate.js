import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

import "../styles/blogTemplate/blogTemplate.css";

// require("prismjs/themes/prism-solarizedlight.css");

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data; // data.markdownRemark holds the post data
    const { frontmatter, html } = markdownRemark; // frontmatter is all the meta-content in the blog post, html is the actual content
    return (
        <div class="site">
            <Helmet>
                <title>{`Blog / ${frontmatter.title}`}</title>
            </Helmet>
            <Navbar />
            <div className="blog-post container content">
                <div className="row my-5">
                    <div class="col">
                        <h1 className="post-title">{frontmatter.title}</h1>
                        <h2 className="post-detail">
                            <span class="post-author">{frontmatter.author}</span> -{" "}
                            <span class="post-date">{frontmatter.date}</span>
                        </h2>
                        <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                author
            }
        }
    }
`;
