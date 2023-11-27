import React from 'react'
import Form from '../Components/Form/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <h2>Quieres saber más?</h2>
      <p>Envianos tus preguntas y un especialista se estará comunicando contigo</p>
      <Form/>
    </div>
  )
}

export default Contact