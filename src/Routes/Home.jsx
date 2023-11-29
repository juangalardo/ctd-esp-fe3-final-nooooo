import React from "react";
import Card from "../Components/Card/Card";
import { useCharStates } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useCharStates();

  return (
    <div>
      {state.list.map(item => <Card key={item.id} item={item} />)}
    </div>
  )
}

export default Home

// import React, {useEffect} from 'react'
// import Card from '../Components/Card/Card'
// import { useContextGlobal } from '../Components/utils/global.context'

// const Home = () => {
// const {theme} = useContextGlobal();
// const {data: apiData} = useContextGlobal();
// useEffect(() => {
//   console.log(apiData)
// }, [])

//   return (
//     <main className={`home ${theme}`}> 
//       <h1>Bienvenido!</h1>
//       <div className='card-grid'>
//       {apiData.map(({ id, name, username }) => (
//           <Card key={id} id={id} name={name} username={username} />
//         ))}

//       </div>
//     </main>
//   )
// }

// export default Home