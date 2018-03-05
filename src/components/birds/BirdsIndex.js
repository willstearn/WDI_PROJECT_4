import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import inArray  from 'in-array';

// const ASYNC_DELAY = 500;

class BirdsIndex extends React.Component {
  state = {
    birds: [],
    orgBirds: [],
    multi: true,
    multiValue: [],
    colors: [],
    showFilter: false
  }

    handleClickFilter = (e) => {
      e.preventDefault();
      var target = e.target.tagName.toLowerCase();
      if(target === 'a') {
        this.setState({ showFilter: !this.state.showFilter });
      }
    }

  handleOnChangeFilter = (value) => {
    this.setState({ multiValue: value });

    const selectColors = [];
    value.map(function(item) {
      selectColors.push(item.value);
    });

    this.state.birds = this.state.orgBirds.filter(i => {
      var isTrue = false;
      if(value.length === 0) {
        isTrue = true;
      } else {
        i.color.map(function(item) {
          if(inArray(selectColors, item)) {
            isTrue = true;
          }
        });
      }

      return isTrue;
    });
  }

  getBirds = (input) => {
    return Axios
      .get('/api/birds', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        this.setState({ birds: res.data });
        this.setState({ orgBirds: res.data });
        var options = [];
        var colors = [];
        res.data.map(function(bird){
          options = [...options, ...bird.color];
        });
        options = options.filter((val,id,array) => array.indexOf(val) === id).sort();

        options.map(function(color) {
          colors.push({
            color: color,
            value: color
          });
        });

        return { options: colors };
      })
      .catch(err => console.log(err));
  }

  componentDidMount() {

  }



  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            <Link className="main-button filter-link" to="#" onClick={this.handleClickFilter}>Filter by colors
              <div className={'filter-wrapper' + (this.state.showFilter ? 'show' : 'hide' )}>
                <Select.AsyncCreatable
                  multi={this.state.multi}
                  loadOptions={this.getBirds}
                  value={this.state.multiValue}
                  onChange={this.handleOnChangeFilter}
                  valueKey="value"
                  labelKey="color"
                />
              </div>
            </Link>
            { Auth.isAuthenticated() && <Link to="/spots/new" className="main-button"> <i className="fa fa-plus"  aria-hidden="true"></i> Add a spot
            </Link>}
          </div>
          {this.state.birds && this.state.birds.map(bird => {
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

export default BirdsIndex;
