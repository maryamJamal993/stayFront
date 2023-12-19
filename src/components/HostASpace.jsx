import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';
import pic1 from '../assests/pic1.jpg'
import ax from 'axios'



const HostASpace = () => {
  const users = JSON.parse(localStorage.getItem('user'))
    const [title, setTitle] = useState("");
    const [ownerEmail, setOwnerEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [description, setDescription] = useState("");
    const [photoPath, setPhotoPath] = useState('');
    const [submitted, setSubmitted] = useState("");
    const [image, setImage] = useState(pic1)
    const [error,setError]=useState('')
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      // if (!users) {
      //   setError('You must be logged in')
      //   return
      // }
  
      try {
        
        const users = JSON.parse(localStorage.getItem('user'))
        const place = {title, description, photoPath,ownerEmail,phoneNumber}

        const response = await ax.post('http://localhost:4000/api/places/' ,place)
       
        setTitle('')
        setDescription('')
        setOwnerEmail('')
        setPhoneNumber('')
        setPhotoPath('')
        setError('')
        setSubmitted(true);
       
      } catch (error) {
       
        setError('please fill out all fields')
      }
     
    }
    const onImageChange = (e) => {
      if(e.target.files && e.target.files[0]) {
        setImage(URL.createObjectURL(e.target.files[0]));
       console.log(URL.createObjectURL(e.target.files[0]))
        setPhotoPath(e.target.files[0]);
      }
    }

  return (
    <div className="hostYourPlace container-fluid p-5 d-flex flex-colomn justify-content-center">
      {
        submitted?<p>data was submitted sucessfully</p>:
        <div className="formContainer d-flex flex-colomn justify-content-center border border-danger rounded-4 shadow-lg w-75">
          <form className="placeDetails d-flex flex-colomn justify-content-around" onSubmit={handleSubmit}>

            <div className="p-5 w-50">
              <div className="input-group mb-3">
                <label className="input-group-text m-3" >Upload Photo</label>
                <img src={image} alt="" className='img-thumbnail m-3 shadow-lg'/>
                <input type="file" className="form-control m-3 rounded-2" id="inputGroupFile01" accept="image/gif, image/jpeg, image/png"  onChange={onImageChange}/>
              </div>
            </div>


            <div className="p-5 w-50 align-self-center">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="place Type" aria-label="Recipient's username" aria-describedby="button-addon2" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
                
              </div>
              <div className="input-group">
                <span className="input-group-text">Description</span>
                <textarea className="form-control" aria-label="With textarea" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="owner email" aria-label="Recipient's username" aria-describedby="button-addon2" value={ownerEmail} onChange={(e)=>{setOwnerEmail(e.target.value)}}/>
                
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="owner phone number" aria-label="Recipient's username" aria-describedby="button-addon2" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                
              </div>
              <input className='btn btn-outline-danger m-3' type="submit" />
              {error && <div className="error">{error}</div>}
            </div>
          </form>
        </div>
}
      </div>

  )
}

export default HostASpace