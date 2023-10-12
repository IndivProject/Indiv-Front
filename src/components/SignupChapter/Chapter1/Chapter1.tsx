import CheckBox from "@/components/common/CheckBox";
import React, { useState } from "react";

const Chapter1 = () => {
  const [checkUseService, setCheckUseService] = useState<boolean>(false);
  return (
    <div>
      <CheckBox state={checkUseService} setState={setCheckUseService} />
    </div>
  );
};

export default Chapter1;
