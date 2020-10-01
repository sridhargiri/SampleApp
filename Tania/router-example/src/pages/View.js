import React, { useState, useEffect } from 'react'
import PopUp from './PopUp';
import "./styles.css";

import { Link } from 'react-router-dom'
import axios from 'axios'


export default function View(props) {
  
  const initialUserState = {
    data: [],
    loading: true, 
  }

  const [data, setUser] = useState(initialUserState)
const [seen, setSeen] = useState(false);
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://localhost:44390/Medicine/GetById/${props.match.params.id}`)

      setUser(data)
    }

    getUser()
  }, [props.match.params.id])
 function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  };
function togglePop() {
   setSeen(!seen)
   alert(seen)
  };
//const { y } =props.location.search
 return (
  <div className="container"> <h3>
         <Link to="/">Back</Link>
  </h3>
  <h3>View Details</h3>
       
        <p>Brand name:</p>
         <span className="form-field">
      { data.brand }</span>
      <br/><br/>
        <p>Price:</p>
         <span className="form-field">
      { data.price }</span>
      <br/><br/>
        <p>Quantity:</p>
         <span className="form-field">
      { data.quantity }</span>
      <br/><br/>
        <p>Expires on:</p>
         <span className="form-field">
      {(new Date(data.expiryDate)).toLocaleDateString()}</span>
      <br/><br/>
        <p>Notes: (<a  onClick={togglePop} href="#">edit</a>)</p>
         <span className="form-field">
      { data.notes }</span>
      {seen ? <PopUp toggle={togglePop} /> : null}
</div>
    );


}

