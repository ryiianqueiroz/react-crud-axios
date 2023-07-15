import React, { useState, useEffect } from 'react'
import HeaderMain from '../components/HeaderMain/headerMain';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Feed() {
  
  const [ postagens, setPostagens ] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      setPostagens(response.data)
    })
    .catch(() => {
      console.log('Deu errado')
    })
  }, [])

  return (
    <div className="Feed">
      <HeaderMain/>

      <main>

        <div className="card">

          {postagens.map((postagens, key) => {            
            
            return (
              <div className="textContent" key={key}>
                <h3>{postagens.title}</h3>
                <hr />
                <p>{postagens.body}</p>
                
                <div className="btns">
                  <div className="btnEdit">
                    <Link to="/edit">
                      <button>Edit</button>
                    </Link>
                  </div>
      
                  <div className="btnLermais">
                    <Link to="/lermais">
                      <button>Ler Mais</button>
                    </Link>
                  </div>
      
                  <div className="btnDelete">
                    <Link to="/delete">
                      <button>Delete</button>
                    </Link>
                  </div>
                </div>
              </div>
            )

          })}
        </div>
      </main>
    </div>
  );
}

export default Feed;