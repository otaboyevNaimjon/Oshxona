import logo from './logo.svg';
import './App.css';
import LoginPages from './Components/LoginPages/LoginPages';
import Chairs from './Components/Chairs/Chairs';
import Dishes from './Components/Dishes/Dishes.jsx';
import Salad from './Components/Salads/Salad.jsx';
import Drink from './Components/Drinks/Drink.jsx';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
       {/* <Chairs /> */}
       <Outlet />
    </div>
  );
}

export default App;


