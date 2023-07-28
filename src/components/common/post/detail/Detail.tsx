import React from "react";
import Comment from "../comment/Comment";
import * as S from "./style";

const Detail = () => {
  return (
    <div>
      <S.SubContentsWrap>
        <S.PostTitleContext>Title</S.PostTitleContext>
        <S.PostDateContext>Date</S.PostDateContext>
        <div>Image</div>
        <div>tag</div>
        <p>Context</p>
      </S.SubContentsWrap>
      <hr />
      <S.SubContentsWrap>
        <Comment />
      </S.SubContentsWrap>
    </div>
  );
};

export default Detail;
