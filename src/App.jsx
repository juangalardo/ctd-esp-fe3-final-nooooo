import React from 'react';
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { ContextProvider } from './Components/utils/global.context';
import Home from './Routes/Home';
import {Routes, Route} from 'react-router-dom';
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';

function App() {
  return (
      
      <ContextProvider>
        <Navbar/>
        <Footer/> 
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contacto' element={<Contact/>}/>
          <Route path='/dentist:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
        </Routes>
        </>
    </ContextProvider>
  );
}

export default App;
