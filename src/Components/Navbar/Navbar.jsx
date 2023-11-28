
import React, {useContext} from 'react'
import {useContextGlobal} from '../utils/global.context'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  const {theme, toggleTheme} = useContextGlobal();

  const routes = [
    { path: '/home', name: 'Home' },
    { path: '/favs', name: 'Favs' },
    { path: '/contacto', name: 'Contacto' },
  ]


  return (
    <nav className={`navbar ${theme}`}>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleTheme}>Cambiar color</button>
    </nav>
  )
}

export default Navbar