import React from "react";
import {Link} from "react-router-dom";
// import imagenDr from '../assets/doctor.jpg';
import './card.css';


const Card = ({item}) => {
  return (
    <div className="card">
      <Link to={'/dentist/' + item.id}>
        <h4>{item.name}</h4>
        <img src={item.image} alt="" />
      </Link>
      <button>☀️</button>

    </div>
  )
}

export default Card;


  // const addFav = ()=>{
  
  //   const cardsExistentes = JSON.parse(localStorage.getItem('favs')) || [];


  //   //ver si es punto some
  //   const estaFavCard = cardsExistentes.find(card => card.id === id);
    
  //   if(!estaFavCard){
  //     const actualizarCards = [...cardsExistentes, {name, username, id}];
  //     localStorage.setItem('favs', JSON.stringify(actualizarCards));
  //     alert('Card guardada con éxito');
  //   } else {
  //     alert('Card ya existe en favoritos');
  //   }
  
  // }

  // return (
  //   <div className="card">
  //     <Link to={`/dentist/${id}`}>
  //       <img src={imagenDr} alt='Imagen doctor' />
  //       <h2>{name}</h2>
  //       <p>{username}</p>
  //       <p>{id}</p>
  //     </Link>

  //       <button onClick={addFav} className="favButton">Agregar a favoritos</button>
  //   </div>
  // );

