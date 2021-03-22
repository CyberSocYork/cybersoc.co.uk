import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import styled from "styled-components";

import { color } from "@theme/config";

const Date = styled.p`
  font-size: 0.75rem;
  margin-bottom: 0.1em;
`;

const Title = styled.h3`
  a {
    font-weight: 700;
  }

  margin-bottom: 0.1em;
`;

const Author = styled.span`
  font-size: 0.75rem;
`;

const PostSeparator = styled.hr`
  color: ${color.accent};
`;

const PostLink = ({
  post: {
    frontmatter: { author, date, path, title },
    excerpt,
  },
}) => (
  <div style={{ margin: "1em 0" }}>
    <Date>
      <Author>{author}</Author> on {date}
    </Date>
    <Title>
      <Link to={path}>{title}</Link>
    </Title>
    <p>{excerpt}</p>
    <PostSeparator />
  </div>
);

PostLink.propTypes = {
  post: PropTypes.object,
};

export default PostLink;
