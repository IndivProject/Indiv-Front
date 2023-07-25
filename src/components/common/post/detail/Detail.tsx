import React from "react";
import Comment from "../comment/Comment";

const Detail = () => {
  return (
    <div>
      <p>Title</p>
      <p>Date</p>
      <div>Image</div>
      <div>tag</div>
      <p>Context</p>
      <hr />
      <Comment />
    </div>
  );
};

export default Detail;
