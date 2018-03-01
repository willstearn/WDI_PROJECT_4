import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';


class SpotsNewIndex extends React.Component {
  state = {
    spots: []
  }

  componentDidMount() {
    Axios
      .post('/api/spots', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ spots: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
          </div>
          {this.state.spots && this.state.spots.map(bird => {
            return(
              <div key={bird.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
                <Link to={`/birds/${bird.id}`}>
                  <img src={bird.image} className="img-responsive" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SpotsNewIndex;
