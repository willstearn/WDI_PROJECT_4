import React from 'react';
import Axios from 'axios';

import Auth      from '../../lib/Auth';
import SpotsForm from './SpotsForm';

class SpotsNew extends React.Component {
  state = {
    spot: {
      bird: '',
      image: '',
      location: ''
    }
  };

  handleChange = ({ target: { name, value } }) => {
    const spot = Object.assign({}, this.state.spot, { [name]: value });
    this.setState({ spot });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

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

      />
    );
  }
}

export default SpotsNew;
