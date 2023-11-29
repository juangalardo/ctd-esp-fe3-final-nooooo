import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect, useState, useContext} from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id} = useParams();
  const {state} = useContext();
  const [dentista, setDentista] = useState();

useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    setDentista(data);
  }
  fetchData();
}, [id])
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Número: {dentista.id} </h1>
      <p>Nombre: {dentista.name}</p>
      <p>Email: {dentista.img}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail