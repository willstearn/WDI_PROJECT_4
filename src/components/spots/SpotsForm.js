import React from 'react';

import Autocomplete from 'react-google-autocomplete';
import ReactFilestack from 'filestack-react';


function SpotsForm({ handleSubmit, handleChange, handleOnLocationChange, spot, birds, handleImageUpload, errors }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label>
            Select bird
          </label>
          {birds && <select name="bird" onChange={handleChange} defaultValue={spot.bird}>
            <option disabled value="">Please select a bird</option>
            {birds.map((bird, i) =>
              <option key={i} value={bird.id}>{bird.name}</option>
            )})
          </select>}
        </div>
        <div className="form-group">
          <label className="image-filestack" htmlFor="image">Image</label>
          <br />
          <ReactFilestack
            apikey="AI85glpMjQZuhWJFfvwtsz"
            buttonText="Upload a photo"
            buttonClass="main-button"
            id="image"
            name="image"
            value={spot.image}
            onChange={handleChange}
            onSuccess={handleImageUpload}
          />
          {errors.image && <p className="error"><small>{errors.image}</small></p>}
        </div>

        {/*
             <div className="form-group">
               <label htmlFor="image">Image</label>
               <input
                 type="text"
                 className="form-control"
                 id="image"
                 name="image"
                 value={spot.image}
                 onChange={handleChange}
               />
             </div> */}


        <div className="form-group">
          <label htmlFor="location">Location</label>
          <Autocomplete
            style={{width: '90%'}}
            onPlaceSelected={(place) => handleOnLocationChange(place)  }
            types={[]}
            className="form-control"
            id="location"
            name="location"
            onChange={handleChange}
          />
        </div>

        <div>
          <button className="save-button">Save</button>
        </div>

      </form>
    </div>
  );
}

export default SpotsForm;
