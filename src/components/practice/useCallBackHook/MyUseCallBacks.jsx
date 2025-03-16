import { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import ChildForCallBack from "./ChildForCallBack";

const MyUseCallBacks = () => {
  const [count, setCount] = useState(0);
  const [deduct, setDeduct] = useState(0);
  const handleIncrementVal = () => {
    setCount(count + 1);
  };
  const handleDecrementVal = () => {
    setDeduct(deduct - 1);
  };
  const changeChildeName = useCallback(() => {
    console.log("hhh");
  }, []);

  return (
    <>
      <h1>
        UseCallBack:{count}:{deduct}
      </h1>
      <ChildForCallBack changeChildeName={changeChildeName} />
      <Button onClick={handleIncrementVal}>Increment</Button>

      <Button onClick={handleDecrementVal}>Decrement</Button>
    </>
  );
};
export default MyUseCallBacks;
