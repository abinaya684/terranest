import logo from './logo.svg';
import './App.css';
import Shopbycatogary from './Shopbycategory';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shopbycategory" element={<Shopbycatogary/>}/>
      </Routes>         
    </div>
    </BrowserRouter>
  );
}

export default App;
