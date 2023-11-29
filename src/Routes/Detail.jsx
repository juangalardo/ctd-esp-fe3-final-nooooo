import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [character, setCharacter] = useState({});
  const {id} = useParams();
  console.log(id)
  const url = 'https://jsonplaceholder.typicode.com/users' + id
  useEffect(() => {
    axios(url)
    .then(res => setCharacter(res.data))
  }, [])
  
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
      <h1>{character.username}</h1>
      <h3>{character.email}</h3>
    </div>
  )
}

export default Detail