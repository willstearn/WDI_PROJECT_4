import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';


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
  render() {
    return (
      <div className="row">
        <div className="image-tile col-md-6">
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
