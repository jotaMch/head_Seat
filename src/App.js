// App.js
import React, { useState } from "react";
import Header from "./components/header/Header";
import Listas from "./components/content/SectionLi";
import FormContact from './components/content/Form';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import About from "./components/about/About";
import BuyProduct from "./components/purchase/BuyProduct";

function App() {
  const [form, setForm] = useState('none');
  const [contentProduct, setContentProduct] = useState(true);

  return (
    <Router>
      <Routes>

        <Route path="/" 
        element={
        <Home form={form} 
        setForm={setForm} 
        contentProduct={contentProduct} 
        setContentProduct={setContentProduct} />
        } />

        <Route path="/message" 
        element={
        <FormContact form={form} 
        setForm={setForm} 
        contentProduct={contentProduct} 
        setContentProduct={setContentProduct} />
        } 
        />

        <Route path="/about" 
        element={< About />}
        />

        <Route path="/purchase" element={<BuyProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;


const Home = ({ form, setForm, contentProduct, setContentProduct }) => {
  return (
    <div className="">
      <Header setForm={setForm} />
      <Listas form={form} setForm={setForm} content={contentProduct} setContent={setContentProduct} />
    </div>
  );
}