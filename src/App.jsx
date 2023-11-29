import {Routes, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contacto' element={<Contact/>}/>
        <Route path='/favs' element={<Favs/>}/>
        <Route path='/dentist/:id' element={<Detail/>}/>
        <Route path='*' element={<h1>Error 404 - Página no encontrada</h1>}/>
      </Routes>
    </>
)
}

export default App