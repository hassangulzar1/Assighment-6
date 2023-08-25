import React from "react";
import "./Button.css";

function PrimaryButton(props) {
  return (
    <button
      className="btn1
      "
      style={{
        padding: props.style.padding,
        backgroundColor: props.style.backgroundColor,
        color: props.style.color,
      }}
    >
      {props.style.text}
    </button>
  );
}

export default PrimaryButton;
