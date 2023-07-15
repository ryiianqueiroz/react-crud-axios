import React from 'react'
import Return from '../images/back-button.svg'
import { Link } from 'react-router-dom'

function Lermais() {
  return (
    <div className="Lermais">
      <header>
        <Link to="/">
          <img src={Return} alt="#"/>
        </Link>
      </header>

      <main>
        <div className="textContent">
          <h3>Curso de React</h3>
          <hr />
          <p>Curso de react com sass Curso de react com sass Curso de react com sass</p>
        </div>
      </main>
    </div>
  );
}

export default Lermais;