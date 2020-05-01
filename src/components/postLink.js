import React from "react";
import { Link } from "gatsby";

import "../styles/components/postLink.scss";

const PostLink = ({ post }) => (
	<div>
		<p class="post-link-date">
			{post.frontmatter.author} on {post.frontmatter.date}
		</p>
		<h3 class="post-link-title">
			<Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
		</h3>
		<p>{post.excerpt}</p>
		<hr />
	</div>
);

export default PostLink;
