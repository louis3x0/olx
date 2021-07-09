import React, { useRef } from "react";

const Input = ({ name, ...props }) => {
  const inputRef = useRef(null);
  return (
    <>
      <input ref={inputRef} {...props} />
    </>
  );
};

export default Input;
