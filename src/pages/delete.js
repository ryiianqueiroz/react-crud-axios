import React from 'react'
import Return from '../images/back-button.svg'
import { Link } from 'react-router-dom'

function Delete() {
  return (
    <div className="Delete">
      <header>
        <Link to="/">
          <img src={Return} alt="#"/>
        </Link>
      </header>
    </div>
  );
}

export default Delete;