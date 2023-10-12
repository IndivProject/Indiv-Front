import Chapter1 from "@/components/SignupChapter/Chapter1";
import Chapter2 from "@/components/SignupChapter/Chapter2";
import Chapter3 from "@/components/SignupChapter/Chapter3";
import Chapter4 from "@/components/SignupChapter/Chapter4";
import React, { useState } from "react";

const SignupView = ({ children }: { children: React.ReactElement }) => {
  const [pageIdx, setPageIdx] = useState<number>(0);

  const setChapter = () => {
    switch (pageIdx) {
      case 0:
        return <Chapter1 />;
      case 1:
        return <Chapter2 />;
      case 2:
        return <Chapter3 />;
      case 3:
        return <Chapter4 />;
      default:
        return null;
    }
  };

  return (
    <>
      {children}
      {setChapter()}
    </>
  );
};

export default SignupView;
