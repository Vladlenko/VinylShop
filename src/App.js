import React from 'react';
import './App.css';
import Main from './Pages/Main'
import Header from './Components/Elements/Header/Header';
import {Routes, Route, Link} from "react-router-dom";
import Accessories from './Pages/Accessories'
import OurVinyl from './Pages/OurVinyl'
import LogIn from './Pages/Login'
import Footer from './Components/Elements/Footer/Footer'
import Admin from './Pages/admin'

const textList = ['Our Vinyl', 'Accessories', 'Gift Cards', 'About us', 'Info', 'Contacts']

export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/accessories' element = {<Accessories></Accessories>}></Route>
        <Route path='/ourvinyl' element = {<OurVinyl></OurVinyl>}></Route>
        <Route path='/user' element = {<LogIn></LogIn>}></Route>
        <Route path='/admin' element = {<Admin></Admin>}></Route>

        <Route path='*' element = {<Main></Main>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}