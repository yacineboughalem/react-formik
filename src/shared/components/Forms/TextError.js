import React from "react";

function TextError(props) {
  return (
    <div className="error">
      <small>{props.children}</small>
    </div>
  );
}

export default TextError;
