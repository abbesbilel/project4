import React from 'react'
import sadDoctorImage from '../assets/sad_doctor.png';
import logoImage from '../assets/DZTABIB.png';
import check from '../assets/upload.svg'
import './Success.css'

export default function Success() {
  return (
    <div>
        <div className="logo">
                <img src={logoImage} alt="Logo" />
            </div>
        <div className="container">
        <div className="image">
                    <img src={sadDoctorImage} alt="Sad doctor" />
                </div>
                <div className="content-success">
                <img src={check} alt="check" />
                <div className='text-suc'>
                <h1 className='title-suc'>Successful</h1>
                <p className='p-suc'>Your password has been reset successfully</p>
                </div>
                <button className='Next'>Next</button>
                </div>
        </div>
      
    </div>
  )
}
