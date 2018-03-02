import React    from 'react';
import Axios    from 'axios';

class SpotsShow extends React.Component {

  constructor(props) {
    super(props);

    // props = {
    //   spot: {}


    // this.state = bird.spot

  }

  componentWillMount() {
    Axios
      .get(`/api/spots/${this.props.match.params.id}`)
      .then(res => this.setState({ spot: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.spot.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{this.state.spot.name}</h3>
          <h4>{this.state.spot.location}</h4>
        </div>
      </div>
    );
  }
}

export default SpotsShow;
