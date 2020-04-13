import React, { useState } from 'react'
import './CvForm.scss'

import Button from './../shared/Button/Button'
    
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
        let newState = {...formState}

        switch(e.target.name) {
            case 'name':
                newState.name = e.target.value
                setFormState(newState)
                break;
            case 'email':
                newState.email = e.target.value
                setFormState(newState)
                break;
            case 'phone':
                newState.phone = e.target.value
                setFormState(newState)
                break;
            case 'file':
                console.log(e.target.value)
                newState.file = e.target.value
                setFormState(newState)
                // setUploadStatusMessage('CV uploaded')
                break;
            case 'message':
                newState.message = e.target.value
                setFormState(newState)
                break;
            
            default:
                console.log('nothing')
                break;
        }
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

                            <img src="./img/wanttoworkwithus.png" alt="join our team"/>
                            <form onSubmit={submit}>
                                <input type="text" name="name" placeholder="Name" value={formState.name} style={{ width:"30%"}} onChange={change}/>
                                <input type="email" name="email" placeholder="E-mail" value={formState.email} style={{width:"64%"}} onChange={change}/>
                                <input type="tel" name="phone" placeholder="+380" value={formState.phone} style={{ width:"30%", marginRight:"299px"}} onChange={change}/>
                                <label for="file-upload" className="custom-file-upload">Browse...</label>
                                <input type="file" name="file" placeholder="file" id="file-upload" style={{ width:"216px"}} onChange={change}/>

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