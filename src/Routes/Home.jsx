import React, {useEffect} from 'react'
import Card from '../Components/Card/Card'
import { useContextGlobal } from '../Components/utils/global.context'

const Home = () => {
const {theme} = useContextGlobal();
const {data: apiData} = useContextGlobal();
useEffect(() => {
  console.log(apiData)
}, [])

  return (
    <main className={`home ${theme}`}> 
      <h1>Home</h1>
      <div className='card-grid'>
      {apiData.map(({ id, name, username }) => (
          <Card key={id} id={id} name={name} username={username} />
        ))}

      </div>
    </main>
  )
}

export default Home