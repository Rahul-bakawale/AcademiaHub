import React, { useRef, useState } from "react";

const UnControlComponent = () => {
  const [control, setControl] = useState();
  const refElement = useRef();
  const handleChange = () => {
    setControl(refElement.current.value);
  };
  return (
    <>
      <h1>UnControlComponent</h1>
      <input
        type="text"
        placeholder="Enter"
        ref={refElement}
        onChange={handleChange}
        value={control}
      />
      {control}
    </>
  );
};

export default UnControlComponent;
