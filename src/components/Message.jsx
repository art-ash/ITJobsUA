import React from "react";
import PropTypes from "prop-types";

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

Message.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Message;
