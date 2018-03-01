import React from 'react';
import Axios from 'axios';

import Auth      from '../../lib/Auth';
import SpotsForm from './SpotsForm';

class SpotsNew extends React.Component {
  state = {
    spot: {
      bird: '',
      image: '',
      location: {}
    },
    errors: {}
  };

  handleChange = ({ target: { name, value } }) => {
    const spot = Object.assign({}, this.state.spot, { [name]: value });
    this.setState({ spot });
  }

  handleOnLocationChange = (place) => {
    const location = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    };

    const spot = Object.assign({}, this.state.spot, { location });
    this.setState({ spot }, () => console.log(this.state.spot));
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleImageUpload = result => {
    const spot = Object.assign({}, this.state.spot, { image: result.filesUploaded[0].url});
    const errors = Object.assign({}, this.state.errors, { image: ''});
    this.setState({ spot, errors });
  }

  componentDidMount() {
    Axios
      .get('/api/birds', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ birds: res.data }))
      .catch(err => console.log(err));

  }

  render() {
    return (
      <SpotsForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleOnLocationChange={this.handleOnLocationChange}
        birds={this.state.birds}
        spot={this.state.spot}
        handleImageUpload={this.handleImageUpload}
        errors={this.state.errors}

      />
    );
  }
}

export default SpotsNew;
