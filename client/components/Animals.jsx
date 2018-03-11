import React from 'react';
import $ from 'jquery';
import Bio from './Bio.jsx';
import Modal from './Modal.jsx';
import axios from 'axios';

export default class Animals extends React.Component {
  constructor () {
    super();
    this.state = {
      animals: []
    };
  }

  componentWillMount () {
    axios.get('/animals').then(res => {
      this.setState({animals: res.data});
      console.log(this.state.animals);
    });
  }

  render () {
    return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <h2 className="logo lobster"><i className="fas fa-paw"></i>  Animal Shoppe&nbsp;</h2>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

      <div className="jumbotron">
        <div className="container">
          <h2 className="lobster">Welcome to the Animal Shoppe</h2>
          <p>Easily the greatest adoption agency ever with only the finest puppies and kitties.</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {this.state.animals.map((animal, index) => {
            return <Bio animal={animal} key={index} />
          })
          }
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="offset-sm-8 col-sm-4">
              <p><i class="fa fa-phone fa-2x" aria-hidden="true"></i> 867-5309</p>
              <p><i class="fas fa-map-pin"></i> 123 Fake Street, San Francisco</p>
            </div>
          </div>
        </div>
      </div>

      {this.state.animals.map((animal, index) => {
        return <Modal animal={animal} key={index} />
      })
      }
    </div>
    )
  }
}

/*

*/

