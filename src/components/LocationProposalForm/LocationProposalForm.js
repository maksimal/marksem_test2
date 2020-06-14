import React, { useState } from 'react';
import "./LocationProposalForm.scss"
import Button from './../shared/Button/Button';

const LocationProposalForm = ({
  ...props
}) => {

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const isFormValid = (values) => {
    let valid = true;
    for (let name in values) {
      if (!values[name]) valid = false;
    }

    return valid;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid(values)) {
      console.log(values)
    }
  }

  return (
    <section className="location-form-section" style={{ backgroundImage: `url(./img/location-bg.png)` }} {...props}>
      <div className="container">
        <div className="location-form-section__inner">
          <div className="form-container">
            <h2 className="title">Did not find a suitable location?</h2>
            <p className="intro-text">Offer your location and give your email for communication</p>
            <form action="#" className="form">
              <div className="name-email-wrapper" style={{ display: "flex" }}>
                <input
                  required
                  style={{ marginRight: "20px" }}
                  className="form-field"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <input
                  required
                  className="form-field"
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>

              <textarea
                required
                style={{ resize: "none", flexGrow: 1 }}
                className="form-field"
                type="text"
                placeholder="Message"
                name="message"
                id="message"
                onChange={handleChange}
                value={values.message}
              ></textarea>

              <div style={{ textAlign: "right" }}>
                <Button
                  text="Send"
                  classList="btn btn-secondary"
                  onClick={handleSubmit}
                />
              </div>
            </form>
          </div>
          <div className="map-img-container">
            <img className="map-img" src="./img/location-bg2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationProposalForm;
