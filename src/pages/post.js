import React from 'react'
import Return from '../images/back-button.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

function Post() {
  const [ post, setPost ] = useState({
    title: "",
    description: "",
    content: ""
  })

  const handleInput = (event) => {
    setPost({...post, [event.target.name]: event.target.event})
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <div className="Post">
      <header>
        <Link to="/">
          <img src={Return} alt="#"/>
        </Link>
      </header>

      <div className="add-Post">
        <div className="textContent">
          <h1>Criar Postagem</h1>
          <hr />

          <form onSubmit={handleSubmit}>
            
            <div className="field">
              <p>Título</p>
              <input type="text" name="title" onChange={handleInput}/>
            </div>  
            
            <div className="field">
              <p>Descrição</p>
              <input type="text" name="description" onChange={handleInput}/>
            </div>
            
            <div className="field">
              <p>Postagem</p>
              <textarea type="text" name="content" onChange={handleInput}/>
            </div>

            <div className="btn-post">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Post;