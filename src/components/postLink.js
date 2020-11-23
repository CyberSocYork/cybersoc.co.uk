import React from "react";
import { Link } from "gatsby";

import "../styles/components/postLink.scss";

const PostLink = ({ post }) => (
  <div style={{ margin: "1em 0" }}>
    <p className="post-link-date">
      {post.frontmatter.author} on {post.frontmatter.date}
    </p>
    <h3 className="post-link-title">
      <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <hr />
  </div>
);

export default PostLink;
