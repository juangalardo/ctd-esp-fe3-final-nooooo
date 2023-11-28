import React from 'react'
import dhlogo from '../assets/DH.png'
import '../../index.css'

const Footer = () => {
  return (
    <footer>
        <p>Desarrollado para</p>
        <img src={dhlogo} alt="Logo DH" />
    </footer>
  )
}

export default Footer
