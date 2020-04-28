import React, { useState } from 'react';
import "./ContactForm.scss";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './../shared/Button/Button';

const StyledFormInput = (props) => {
  console.log(props);
  return (
    <div className="form-field" >
      <input {...props} className="form-field__input" />
    </div>
  )
}

const StyledFormTextfield = (props) => {
  return (
    <div className="form-texarea">
      <textarea placeholder={props.placeholder} className="form-field__input" name={props.name} id="" cols="30" rows="2"></textarea>
    </div>
  )
}

const ContactForm = ({
  title,
  introText
}) => {

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="contact-form-formik">
      <div className="form-container">
        {!isSubmitted &&
          <h2 className="form-title">{title}</h2>
        }

        {!isSubmitted &&
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: "",
              message: ""
            }}

            validate = {values => {
              let errors = {};
              if (!values.message) {
                errors.message = 'Required';
              };
              if (!values.email) {
                errors.email = "Required"
              }
              console.log( "errors.email:", errors.email);
              return errors;
            }}
            
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                setIsSubmitted(true);
              }, 400);
            }}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="form">
                <p className="form-intro-text">{introText}</p>
                <div className="form-fields-container">

                  <Field
                    as={StyledFormInput}
                    type="text"
                    name="name"
                    placeholder="Name"
                  />

                  <Field
                    as={StyledFormInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                    
                  />
                  {errors.email && touched.email &&  <div>{ errors.email }</div>}


                  <Field
                    as={StyledFormInput}
                    type="text"
                    name="phone"
                    placeholder="Phone"
                  />


                  <Field
                    as={StyledFormTextfield}
                    type="text"
                    name="message"
                    multiline={true}
                    rowsMax="3"
                    placeholder="Message"
                  />


                </div>


                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="form-submit-button"
                >
                  <Button
                    type="main"
                    text="Send message"
                  />
                </button>
              </Form>
            )}
          </Formik>
        }


        {isSubmitted &&
          <div className="form-submitted">
            <h3>Thank you,</h3>
            <p>Our managers will contact you soon.</p>
          </div>}


      </div>

    </div>
  );
}

export default ContactForm;
