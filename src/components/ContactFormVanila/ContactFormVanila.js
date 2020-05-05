import React, { useState, Fragment } from 'react';
import "./ContactFormVanila.scss";
import Button from './../shared/Button/Button';


const ContactFormVanila = ({
  title,
  introText,
  actionOnClick
}) => {

  const [state, setState] = useState({
    values: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    errors: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    isSubmitted: false,
    charactersLeft: {
      message: 100
    },
    charactersMax: {
      message: 100
    }
  });

  const isFormValid = (errors) => {
    let isValid = true;

    for (let error in errors) {
      if (errors[error]) {
        isValid = false;
      }
    }

    return isValid
  }

  const validateRequired = (value) => !value ? "Required" : "";

  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email';
    }
    return error;
  }

  const validateForm = () => {
    let errors = state.errors;

    errors.name = validateRequired(state.values.name);
    errors.email = validateRequired(state.values.email);
    errors.message = validateRequired(state.values.message);

    setState({ ...state, errors })
  }

  const handleChange = (e) => {
    e.preventDefault();
    let { name } = e.target;
    let value = e.target.value;

    let charactersLeft;
    if (name === "message") {
      charactersLeft = state.charactersMax.message - value.length;
      value = charactersLeft > 0 ? e.target.value : state.values.message;
    }

    setState({
      ...state,
      values: { ...state.values, [name]: value },
      charactersLeft: { message: charactersLeft }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validateForm();

    if (isFormValid(state.errors)) {
      actionOnClick();
      setState({ ...state, isSubmitted: true });
    }
  }

  return (
    <div className="contact-form-general">

      <h2 className={state.isSubmitted ? "form-title form-title__hidden" : "form-title"}>{title}</h2>

      <div className="form-container">

        {!state.isSubmitted &&
          <Fragment>
            {introText &&
              <p className="form-intro-text">{introText}</p>}

            <div className="form-wrapper">
              <form className="form">

                <div className="form-fields-container">
                  <input
                    onChange={handleChange}
                    value={state.values.name}
                    type="text"
                    name="name"
                    placeholder="Ім’я"
                    className={!state.errors.name ? "form-field" : "form-field form-field__error"}
                  />


                  <input
                    onChange={handleChange}
                    value={state.values.email}
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-field"
                    className={!state.errors.email ? "form-field" : "form-field form-field__error"}

                  />

                  <input
                    onChange={handleChange}
                    value={state.values.phone}
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    className="form-field"
                    className={!state.errors.phone ? "form-field" : "form-field form-field__error"}
                  />
                  <div className="field-container">
                    <textarea
                      onChange={handleChange}
                      value={state.values.message}
                      type="text"
                      name="message"
                      placeholder="Повідомлення"
                      className="form-field"
                      rows="2"
                      style={{ resize: "none" }}
                      className={!state.errors.message ? "form-field" : "form-field form-field__error"}
                    />
                    {state.values.message.length > 50 &&
                      <div className="characters-limit">
                        <span className="characters-limit-text">characters left:</span>
                        <span className="characters-limit-number">{state.charactersLeft.message}</span>
                      </div>
                    }
                  </div>

                </div>

                <div className="form-submit-button" >
                  <Button
                    type="main"
                    text="Надіслати"
                    onClick={handleSubmit}
                  />
                </div>

              </form>
            </div>
          </Fragment>
        }



        {state.isSubmitted &&
          <div className="form-submitted">
            <h3>Thank you,</h3>
            <p>Our managers will contact you soon.</p>
          </div>
        }


      </div>

    </div>
  );
}

export default ContactFormVanila;