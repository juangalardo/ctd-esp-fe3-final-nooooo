import React from "react";
import {Link} from "react-router-dom";
import imagenDr from '../asserts/doctor.jpg';
import './card.css';

const Card = ({ name, username, id }) => {

  const addFav = ()=>{
  
    const cardsExistentes = JSON.parse(localStorage.getItem('favs')) || [];


    //ver si es punto some
    const estaFavCard = cardsExistentes.find(card => card.id === id);
    
    if(!estaFavCard){
      const actualizarCards = [...cardsExistentes, {name, username, id}];
      localStorage.setItem('favs', JSON.stringify(actualizarCards));
      alert('Card guardada con éxito');
    } else {
      alert('Card ya existe en favoritos');
    }
  
  }

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <img src={imagenDr} alt='Imagen doctor' />
        <h2>{name}</h2>
        <p>{username}</p>
        <p>{id}</p>
      </Link>

        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
