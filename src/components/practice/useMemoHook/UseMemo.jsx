import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const UseMemo = () => {
  //   const [count, setCount] = useState(0);
  //   const [sub, setSub] = useState(100);
  //   const handleCount = () => {
  //     console.log("COUNT");
  //     setCount(count + 1);
  //   };
  //   const handleSub = () => {
  //     console.log("SUB");
  //     setSub(sub - 1);
  //   };
  //   function handleMultiplication() {
  //     console.log("Multiplication");
  //     return count * 10;
  //   }
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
  //   const calculateSum = (num) => {
  //     console.log("Calculating sum...");
  //     return num * 2;
  //   };
  //   const result = calculateSum(number); // Runs on every render
  const result = useMemo(() => {
    console.log("Calculating sum...");
    return number * 2;
  }, [number]);
  return (
    <>
      <h1> learning UseMemoHook</h1>
      <div>
        <h2>Sum: {result}</h2>
        <button onClick={() => setCount(count + 1)}>
          Increment Count: {count}
        </button>
        <button onClick={() => setNumber(number + 1)}>
          Change Number: {number}
        </button>
      </div>
      {/* {handleMultiplication()}
      <h1>{count}</h1>
      <Button onClick={() => handleCount()}>Increment</Button>
      <h1>{sub}</h1>
      <Button onClick={() => handleSub()}>Decrement</Button>
      <br /> */}
      {/* <Button onClick={() => handleMultiplication()}>Multiplication</Button> */}
    </>
  );
};
export default UseMemo;
