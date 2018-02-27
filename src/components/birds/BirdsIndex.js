import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class BirdsIndex extends React.Component {
  state = {
    foods: []
  }

  componentWillMount() {
    Axios
      .get('/api/birds')
      .then(res => this.setState({ birds: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.foods.map(food => {
          return(
            <div key={bird.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/foods/${bird.id}`}>
                <img src={bird.image} className="img-responsive" />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BirdsIndex;
