import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function UserPage(props) {
  const initialUserState = {
    user: [],
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://localhost:44390/Medicine`)

      setUser(data)
    }

    getUser()
  }, [props.match.params.id])

  return user.loading ? (
    <div>Loading...</div>
  ) : user.length? (
 
    <div className="container">
  <h3>
         <Link to="/Add">Add</Link>
  </h3>
      <h1>{props.match.params.id}</h1>

      <table>
        <thead>
           <tr>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
          </tr>
        </thead> <tbody>
        {user.map((item,i) =>       
          <tr key={i} style={{backgroundColor:item.quantity<10?'yellow':'white'}}>
            <td> 
<Link to={`/view/${item.id}`}> {item.brand}</Link>
            </td>
            <td>
             {item.price}
            </td>
             <td>
             {item.quantity}
            </td>
            <td>{(new Date(item.expiryDate)).toLocaleDateString()}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  ):( <div className="container">
  <h3>
         <Link to="/Add">Add</Link>
  </h3>
 <h3>No data found</h3>
</div>
 )
}
