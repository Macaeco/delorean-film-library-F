
import './App.css';
import LandingPage from './components/landing-page/landingPage.jsx';
import FectchPrueba from './components/prueba-fetch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Details from './components/details/details';
import Lists from './components/lists/lists';
import { Profiler } from 'react';
import Profile from './components/profile/profile';
import Register from './components/register/register';
import Login from './components/login/login';
import Cards from './components/card/cards';
import Card from 'react-bootstrap/Card'
import Validate from './components/validate/validate';
import ProtectedPage from './components/private-routes/privateRoutes';
import Footer from './components/footer/footer';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header></Header>
        <Routes>

          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          
          <Route path="/details" element={<Details></Details>}></Route>
          <Route path="/lists" element={<Lists></Lists>}></Route>
          <Route path="/profile" element={
            <ProtectedPage>
              <Profile></Profile>
            </ProtectedPage>
          }></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/validate" element={<Validate></Validate>}></Route>
        </Routes>
        {/* <Cards></Cards> */}
        
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
