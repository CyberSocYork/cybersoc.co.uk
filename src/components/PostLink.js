import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../styles/components/postLink.scss";

const PostLink = ({
  post: {
    frontmatter: { author, date, path, title },
    excerpt,
  },
}) => (
  <div style={{ margin: "1em 0" }}>
    <p className="post-link-date">
      {author} on {date}
    </p>
    <h3 className="post-link-title">
      <Link to={path}>{title}</Link>
    </h3>
    <p>{excerpt}</p>
    <hr />
  </div>
);

PostLink.propTypes = {
  post: PropTypes.object,
};

export default PostLink;
