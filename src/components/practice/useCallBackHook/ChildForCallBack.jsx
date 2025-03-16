import { memo } from "react";

const ChildForCallBack = () => {
  console.log("ChildForCallBack");

  return <>{}</>;
};
export default memo(ChildForCallBack);
