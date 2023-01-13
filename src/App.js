


import Home from './component/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/Pages/Home/NavBar';
import Store from './component/Pages/Store/Store';
import About from './component/Pages/About/About';
import Cart from './component/Cart/Cart';
import ContextProvider from './component/conrext-store/ContextProvider';
import Footer from './component/Footer';
import  Header from './component/Header'
import Authentication from './component/Authentication/Authentication';

function App() {

  

  return (
    <div>
      <ContextProvider>
       <NavBar />
       <Header />
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path='/store' element={<Store />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Authentication />} />
     
    </Routes>
    <Footer />
    
    </ContextProvider>
  </div>
  );
}

export default App;
