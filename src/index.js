import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dishes from './Components/Dishes/Dishes.jsx'
import Drink from './Components/Drinks/Drink.jsx';
import Salad from './Components/Salads/Salad.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import LoginPages from './Components/LoginPages/LoginPages';
import Chairs from './Components/Chairs/Chairs';
import Cook from './Components/Cook/Cook';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Navbar/>} /> */}
          <Route index element={<LoginPages/>} />
          <Route path='/chair2' element={<Chairs/>}/>
          <Route path='/chair' element={<Chairs/>} />
          <Route path='/cook' element={<Cook/>}/>
        <Route path='/' element={<App/>} >
          <Route path='/dishes/:id' element={<Dishes />} />
          <Route path='/drink/:id' element={<Drink />} />
          <Route path='/salad/:id' element={<Salad />} />
          <Route path='/navbar/:id' element={<Navbar/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
