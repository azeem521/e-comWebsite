


import Home from './component/Pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './component/Pages/Home/NavBar';
import Store from './component/Pages/Store/Store';
import About from './component/Pages/About/About';
import ContextProvider from './component/conrext-store/ContextProvider';
import Footer from './component/Footer';
import  Header from './component/Header'
import Authentication from './component/Authentication/Authentication';
import { Fragment, useContext } from 'react';
import cartContext from './component/conrext-store/contextAPI';

function App() {

  const ctx=useContext(cartContext)

  

  return (
    <Fragment>
     
       <NavBar />
       <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={ctx.isLoggedIn ? <Store /> :<Authentication /> } />

    
      <Route path='/about' element={<About />} />
      <Route path='/login' element={!ctx.isLoggedIn ? <Authentication /> : <Store />} />
     
    </Routes>
    <Footer />
  
  </Fragment>
  );
}

export default App;
