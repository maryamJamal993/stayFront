import React, { useEffect } from 'react'
import { useState } from 'react'
import ax from 'axios'

const Cards = () => {

  const [selectedPlace,setSelectedPlace]=useState('')
  const [Places,setPlaces]=useState([])

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // https://bvc-46jr.onrender.com
        let response = await ax.get("https://blabla-zvtv.onrender.com/api/places");
        console.log(response.data)
        setPlaces(response.data)

      } catch (err) {
        console.log(`ERROR! ${err}`);
      }
     
  
    }

    fetchPlaces();
  }, [])
   
  
    const openModal = (place) => {
      setSelectedPlace(place);
    };
  
    const closeModal = () => {
      setSelectedPlace(null);
    };
  

  return (
    <>
    <div className="cardsContainer w-100 h-100 bg-light row overflow-auto p-5 d-flex justify-content-between">
        {
          Places.map(
            (place) => (
              <div className="card m-4 border border-light shadow" style={{ width: '18rem' }} key={place._id}>
                <img src={place.photoPath} className="card-img-top" alt="..."  />
                <div className="card-body">
                  <h5 className="card-title">{place.title}</h5>
                  <button className="btn btn-danger " onClick={() => openModal(place)}>
                Show Details
              </button>
                </div>
              </div>
            )
          )
        }
      </div>
     { selectedPlace && (
      <div className="modal " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{selectedPlace.title}</h5>
            </div>
            <div className="modal-body">
              <h3>place description: {selectedPlace.description}</h3>
              <h3>owner Email : {selectedPlace.ownerEmail}</h3>
              <h3>owner phone number : {selectedPlace.PhoneNumber}</h3>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-dark" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )

}

export default Cards