// import React from 'react'
// import { useParams } from 'react-router-dom'
// import {useEffect, useState, useContext} from 'react';

// //Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

// const Detail = () => {
//   const {id} = useParams();
//   const {state} = useContext();
//   const [dentista, setDentista] = useState();

// useEffect(() => {
//   async function fetchData() {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await response.json();
//     setDentista(data);
//   }
//   fetchData();
// }, [id])
//   // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

//   return (
//     <>
//       <h1>Número: {dentista.id} </h1>
//       <p>Nombre: {dentista.name}</p>
//       <p>Email: {dentista.img}</p>
//       {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
//       {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
//     </>
//   )
// }

// export default Detail

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContextGlobal } from '../Components/utils/global.context';

const Detail = () => {
  const { id } = useParams();
  const { data: apiData } = useContextGlobal();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setDentist(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Número: {dentist.id}</h1>
      <p>Nombre: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      {/* Aquí puedes agregar más detalles del dentista según tus necesidades */}
    </div>
  );
};

export default Detail;