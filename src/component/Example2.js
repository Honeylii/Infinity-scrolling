import React, { useState, useCallback } from "react";
import { useRef } from "react";
import usePost from "../hooks/usePost";
import Post1 from "./Post1";

const Example2 = () => {
  const [pageNum, setPageNum] = useState(1);

  const { isLoading, isErorr, error, result, hasNextPage } = usePost(pageNum);

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isLoading) return;
      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((post) => {
        if (post[0].isIntersecting && hasNextPage) {
          console.log("we are near the last post");
          setPageNum((prev) => prev + 1);
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isLoading, hasNextPage]
  );

  const content = result.map((post, i) => {
    if (result.length === i + 1) {
      console.log("Last element");
      return <Post1 post={post} key={post.id} ref={lastPostRef} />;
    }
    return <Post1 post={post} key={post.id} />;
  });

  if (isErorr) return <p className="error-center">:Error : {error.message}</p>;
  return (
    <>
      <div className=" container">
        <h1 id="top">
          &infin; Infinite Query &amp; Scroll
          <br /> &infin; Ex. 1 - React Only
        </h1>

        {/* content */}
        <div className="content-div">{content}</div>

        {/* IsLoading */}
        {isLoading && <p className="center-2">Loading More Posts...</p>}
        <p className="center">
          <a href="#top">Back to Top</a>
        </p>
      </div>
    </>
  );
};

export default Example2;
