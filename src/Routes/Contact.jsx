import React from 'react'
import Form from '../Components/Form/Form'
import { useCharStates, useContextGlobal } from '../Components/utils/global.context'


const Contact = () => {
  const { theme } = useCharStates();

return (
    <div className={theme}>
      <h1>Querés saber más sobre nosotros?</h1>
    <Form/>
    </div>
    )
}

export default Contact