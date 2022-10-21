import React from "react";

const index = ({ val, text, setData }) => {
  return (
    <>
      <input
        type="text"
        className="form-control mb-2"
        value={val}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder={text}
      />
    </>
  );
};

export default index;
