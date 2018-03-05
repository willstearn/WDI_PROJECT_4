import React    from 'react';
import Axios    from 'axios';
import Auth from '../../lib/Auth';

import GoogleMap from '../maps/GoogleMaps';

class SpotsShow extends React.Component {
    state = {
      spot: {}
    }

    componentDidMount() {
      console.log(this.props.match.params.id);
      Axios
        .get(`/api/spots/${this.props.match.params.id}`)
        .then(res => {
          console.log(res);
          this.setState({ spot: res.data }, () => console.log(this.state));
        })
        .catch(err => console.log(err));
    }

    deleteSpot = () => {
      Axios
        .delete(`/api/spots/${this.props.match.params.id}`,
          // {
          //   headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
          // }
        )
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    }

    render() {
      return (
        <div className="row">
          <div className="image-tile col-md-6">
            <img src={this.state.spot.image} className="img-responsive" />
          </div>
          <div className="col-md-6">
            {/* <h4>Data</h4> */}
            { this.state.spot.bird &&
              <div>
                <h3>{ this.state.spot.bird.name }</h3>
                {/* <p>{ this.state.spot.location.lat }</p>
                <p>{ this.state.spot.location.lng }</p> */}
                <GoogleMap lat={this.state.spot.location.lat} lng={this.state.spot.location.lng} />
              </div>
            }
            { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteSpot}>
              <i className="fa fa-trash" aria-hidden="true"></i>Delete
            </button>}
            {/* <h3>{this.state.spot.name}</h3>
            <h4>{this.state.spot.location.lat}</h4> */}
          </div>
        </div>
      );
    }
}

export default SpotsShow;
