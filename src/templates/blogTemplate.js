import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Navbar from "../components/navbar/navbar"

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <Helmet>
                <title>{`Blog / ${frontmatter.title}`}</title>
            </Helmet>
            <Navbar />

            <div className="container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
                </div>
            </div>
        </div>
    )
}

export const pageQuery = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`
