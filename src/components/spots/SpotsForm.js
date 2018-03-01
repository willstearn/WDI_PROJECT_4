import React from 'react';

import Autocomplete from 'react-google-autocomplete';

function SpotsForm({ handleSubmit, handleChange, handleOnLocationChange, spot, birds }) {
  return (
    <div className="row">
      <div className="page-banner col-md-12">
      </div>
      <form onSubmit={handleSubmit} className="col-md-6">
        <div className="form-group">
          <label>
            Select bird
            <select multiple={true} value={[spot.bird]}>
              {birds.map(bird => {
                return(
                  <option key={bird._id} value={bird._id}>{bird.bird}</option>
                );
              })}
            </select>
          </label>

        </div>
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
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            Autocomplete
            style={{width: '90%'}}
            onPlaceSelected={(place) => {
              handleOnLocationChange(place);
            }}
            types={[]}
            className="form-control"
            id="location"
            name="location"
            value={spot.location}
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
