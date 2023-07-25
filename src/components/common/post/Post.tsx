import React from "react";
import * as S from "./style";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  return (
    <S.MainContainer onClick={() => router.push("/post/1")}>
      <p>Title</p>
      <p>Date</p>
      <div>image</div>
      <div>post tag</div>
    </S.MainContainer>
  );
};

export default Post;
