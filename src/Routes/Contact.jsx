import React from 'react'
import Form from '../Components/Form/Form'
import { useContextGlobal } from '../Components/utils/global.context'

const Contact = () => {
  const { theme } = useContextGlobal();

return (
    <div className={theme}>
      <h1>Quieres saber más?</h1>
    <Form/>
    </div>
    )
}

export default Contact