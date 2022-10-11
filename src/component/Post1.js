import React, { forwardRef } from "react";

const Post1 = forwardRef(({ post }, ref) => {
  const postBody = (
    <div className="post">
      <h2 className="post-header">{post.title}</h2>
      <p className="post-body">{post.body}</p>
      <p>
        <span className="post-id">Post ID: {post.id}</span>
      </p>
    </div>
  );

  const content = ref ? (
    <article ref={ref}>{postBody}</article>
  ) : (
    <article>{postBody}</article>
  );

  return content;
});

export default Post1;
