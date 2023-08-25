import React from "react";
import "./SecondaryButton.css";

function SecondaryButton(props) {
  return <button class="btn1-secondary">{props.style.text}</button>;
}

export default SecondaryButton;
