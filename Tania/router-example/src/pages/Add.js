import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'


class Add extends React.Component {
 constructor(props) {
    super(props);
    this.state = { brand: '' ,price:'',quantity:'',notes:''};
    
  }
handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
  myChangeHandler = (event) => {
    
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === "price") {
      if (!Number(val)) {
        alert("Your age must be a number");
      }
    }
    this.setState({[nam]: val});
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }

  
  handleSubmit = (event) => {
    console.log('A form was submitted: ', this.state);

    fetch('https://localhost:44390/Medicine/Save', {
        method: 'POST', 
        body: JSON.stringify(this.state),
        headers: {
      'Content-Type': 'application/json'
    }
      }).then(response => {response.json();alert("saved");})
    .then(r => {
      
      console.log(r);
      return r;
    });

    event.preventDefault();
}
  render() {
 return (
  <div className="container"> <h3>
         <Link to="/">Back</Link>
  </h3>
  <h3>Add new</h3>
      <form onSubmit={this.handleSubmit}>    
      <p>Enter brand name:</p>
      <input className="input-field"
        type='text'
        name='brand'
        onChange={this.handleChange}
      />
      <p>Enter price:</p>
      <input
        type='text'
        name='price'
        onChange={this.handleChange}
      />
      <p>Enter quantity:</p>
      <input
        type='text'
        name='quantity'
        onChange={this.handleChange}
      />
      <p>Enter notes:</p>
      <input
        type='text'
        name='notes'
        onChange={this.handleChange}
      />
      <input type="submit" value="Submit" />
      </form></div>
    );
}

}

export default Add