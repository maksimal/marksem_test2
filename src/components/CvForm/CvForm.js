import React, { useState } from 'react';
import './CvForm.scss';
import './media.scss';
import Button from './../shared/Button/Button';

const CvForm = () => {

    const[ formState, setFormState] = useState({
        name:'',
        email:'',
        phone:'',
        file:'',
        message:''
    })

    const [modalIsOpen, setModalIsOpen] = useState(false)

    // const [uploadStatusMessage, setUploadStatusMessage] = useState('Upload your CV')

    const submit = (e) => {
        e.preventDefault();
        setModalIsOpen(true);
        }

    const change = (e) => {
        let propertyName = e.target.name;
        let propertyValue = e.target.value;

        setFormState({
          ...formState,
          [propertyName]: propertyValue
        })
    }

    const refill = (e) => {
        setModalIsOpen(false);
        setFormState({
            name:'',
            email:'',
            phone:'',
            file:'',
            message:''
        })

    }

    return (
        <div className="cv-from">
            <div className="container">
                <div className="cv-form-wrapper">


                    <div className="cv-form-content-wrapper">
                        <h2>want to work with us?</h2>
                        <div className="cv-form-form-wrapper">
                            

                            {modalIsOpen ? 
                            <div className="modal-form-wrapper">
                                <h3>Thank you,</h3>
                                <p>Our managers will contact you soon.</p>
                                <Button text="send another" classList="btn-main" onClick={refill}/>
                            </div>
                            :
                            null
                            }
                            <div className="image-wrapper">
                                <img src="./img/wanttoworkwithus.png" alt="join our team"/>
                            </div>
                            <form onSubmit={submit}>
                                <input className="form-input-text" type="text" name="name" placeholder="Name" value={formState.name} onChange={change}/>
                                {/* <input type="text" name="name" placeholder="Name" value={formState.name} style={{ width:"30%"}} onChange={change}/> */}
                                <input className="form-input-email" type="email" name="email" placeholder="E-mail" value={formState.email} onChange={change}/>
                                {/* <input type="email" name="email" placeholder="E-mail" value={formState.email} style={{width:"64%"}} onChange={change}/> */}
                                <input className="form-input-tel"type="tel" name="phone" placeholder="+380" value={formState.phone} onChange={change}/>
                                {/* <input type="tel" name="phone" placeholder="+380" value={formState.phone} style={{ width:"30%", marginRight:"299px"}} onChange={change}/> */}
                                <label htmlFor="file-upload" className="custom-file-upload">Browse...</label>
                                <input className="form-input-file" type="file" name="file" placeholder="file" id="file-upload" onChange={change}/>
                                {/* <input class="form-input-file" type="file" name="file" placeholder="file" id="file-upload" style={{ width:"216px"}} onChange={change}/> */}

                                <textarea name="message" value={formState.message} placeholder="Message" onChange={change}/>
                                <Button onClick={()=>{}} type="submit" text="make an appointment" classList="btn-main" />

                            </form>
                        </div>
                    </div>


                    <div className="cv-form-background"></div>
                </div>
            </div>
        </div>
    )
}

export default CvForm