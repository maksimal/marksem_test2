import React from "react";

import "./SubscribeForm.scss";
import Button from "../shared/Button/Button";

function SubscribeForm({placeholder, btnText}) {
  const _handlerSubmit = (e) => {
    //TODO;
    
    // e.preventDefault();
  }
  return (
    <form className="subscribe-form">
      <input
        id="email"
        className="subscribe-form__email"
        placeholder={placeholder}
        required
        type="email"
      />
      <Button
        type="secondary"
        text={btnText}
        classList="subscribe-form__submit"
        onClick={_handlerSubmit}
      />
    </form>
  );
}

export default SubscribeForm;
