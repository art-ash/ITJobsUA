import React from "react";

const Message = ({ type, text }) => {
  return (
    <div
      className={`alert alert-${type} d-flex align-items-center justify-content-center w-25 mt-2`}
      role="alert"
    >
      <div>{text}</div>
    </div>
  );
};

export default Message;
