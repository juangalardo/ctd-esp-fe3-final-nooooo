import React, { useEffect, useState } from 'react';
import { useContextGlobal } from '../Components/utils/global.context';
import Card from '../Components/Card/Card';

const Favs = () => {
  const { theme } = useContextGlobal();
  const [favDentists, setFavDentists] = useState([]);

  useEffect(() => {
    const getFavDentists = JSON.parse(localStorage.getItem('favs')) || [];
    setFavDentists(getFavDentists);
  }, []);

  const deleteFav = (id) => { localStorage.setItem('favs', JSON.stringify(favDentists.filter(dentist => dentist.id !== id)));
    setFavDentists(prevFavDentists => prevFavDentists.filter(dentist => dentist.id !== id));
  };

  return (
    <>
    <div className={`favs ${theme}`}>
      <h1>Dentistas favoritos</h1>
      <div className='card-grid'>
        {favDentists.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} deleteFav={deleteFav}/>
        ))}
        </div>
      </div>
    </>
  )
}
    
export default Favs;