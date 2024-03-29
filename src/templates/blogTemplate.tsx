import React from "react";
import { graphql } from "gatsby";

import styled from "styled-components";

import { Button, Layout, TagLink } from "~/components";

import { color } from "~/theme/config";

const Title = styled.h1`
  margin-bottom: 0.5rem;
`;

const Detail = styled.h2`
  font-size: 0.8rem;
  font-weight: 300;
`;

const Date = styled.span`
  color: ${color.accent};
  text-transform: uppercase;
`;

const Content = styled.div`
  text-align: left;
  text-align-last: left;
`;

const BackButton = styled(Button)`
  margin-bottom: 1em;
  padding: 0.25em 0.5em;
`;

const TagHolder = styled.div`
  display: flex;
  gap: 0.5em;

  margin-bottom: 1em;

  width: fit-content;
`;

type TemplateProps = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        path: string;
        title: string;
        author: string;
        tags: string[];
      };
    };
  };
};

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}: TemplateProps) {
  const { markdownRemark } = data; // data.markdownRemark holds the post data
  const { frontmatter, html } = markdownRemark; // frontmatter is all the meta-content in the blog post, html is the actual content
  return (
    <Layout title={`Blog / ${frontmatter.title}`}>
      <div className="blog-post container">
        <div className="row my-5">
          <div className="col">
            <BackButton to="/blog">Back</BackButton>
            <Title>{frontmatter.title}</Title>
            {frontmatter.tags.length > 0 ? (
              <TagHolder>
                {frontmatter.tags.map((tag, i) => (
                  <TagLink key={i} to={`/tags/${tag}`}>
                    {tag}
                  </TagLink>
                ))}
              </TagHolder>
            ) : null}
            <Detail>
              <span>{frontmatter.author}</span> - <Date>{frontmatter.date}</Date>
            </Detail>
            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        tags
      }
    }
  }
`;
