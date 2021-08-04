import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

function CartWidget() {
  return (
    <div style={{ fontSize: "5em", color: "blue" }}>
      <FontAwesomeIcon icon={faCat} />
      {""}
      <FontAwesomeIcon icon={faFacebook} />
      {""}
      <FontAwesomeIcon icon={faApple} />
    </div>
  );
}
export default CartWidget;
