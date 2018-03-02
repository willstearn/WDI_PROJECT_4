import React    from 'react';
import Axios    from 'axios';

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
    render() {
      return (
        <div className="row">
          <div className="image-tile col-md-6">
            <img src={this.state.spot.image} className="img-responsive" />
          </div>
          <div className="col-md-6">
            <h4>Data</h4>
            { this.state.spot.bird &&
              <div>
                <h3>{ this.state.spot.bird.name }</h3>
                <p>{ this.state.spot.location.lat }</p>
                <p>{ this.state.spot.location.lng }</p>
              </div>
            }
            {/* <h3>{this.state.spot.name}</h3>
            <h4>{this.state.spot.location.lat}</h4> */}
          </div>
        </div>
      );
    }
}

export default SpotsShow;
