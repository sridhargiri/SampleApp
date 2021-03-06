import React, { useState, useEffect } from 'react'

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

import { Link } from 'react-router-dom'
import axios from 'axios'


class Add extends React.Component {
 constructor(props) {
    super(props);
    this.state = { brand: '' ,price:'',quantity:'',notes:'',expiryDate:new Date()};
    this.handleChange = this.handleChange.bind(this);
    this.toggleShowHide = this.toggleShowHide.bind(this);
    
  }
handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

toggleShowHide = m => {
    this.setState({ expiryDate: m });
    console.log('dat',this.state.expiryDate);
  };

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

console.log('child',React.Children.map(this.props.children, child => child.props.data));
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
      <p>Expiry</p>
<DatePicker
              selected={ this.state.expiryDate }
              onChange={ this.toggleShowHide }
              name="expiryDate"
              dateFormat="MM/dd/yyyy"
          />
      <input type="submit" value="Submit" />
      </form></div>
    );
}

}

export default Add