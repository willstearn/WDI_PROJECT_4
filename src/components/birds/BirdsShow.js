import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';


class BirdsShow extends React.Component {
  state = {
    bird: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/birds/${this.props.match.params.id}`)
      .then(res => this.setState({ bird: res.data }))
      .catch(err => console.log(err));
  }

  deleteSpot = () => {
    Axios
      .delete(`/api/spots/${this.props.match.params.id}`, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          { Auth.isAuthenticated() && <Link to="/spots/new" className="main-button"> <i className="fa fa-plus"  aria-hidden="true"></i>Add a spot
          </Link>}
          <img src={this.state.bird.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.bird.name}</h3>
          <h4>{this.state.bird.color}</h4>
        </div>
      </div>
    );
  }
}

export default BirdsShow;
