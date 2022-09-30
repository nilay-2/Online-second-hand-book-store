import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import Register from './pages/Register';
import ShopSingle from './pages/ShopSingle';
import Thankyou from './pages/Thankyou';
import Chat from './pages/Chat';
import ProductFrom from './pages/ProductFrom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/home' element={<Home/>} />
      <Route exact path='/' element={<Login/>} />
      <Route exact path='/checkout' element={<Checkout/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/shop' element={<Shop/>} />
      <Route exact path='/cart' element={<Cart/>} />
      <Route exact path='/register' element={<Register/>} />
      <Route exact path='/detail' element={<ShopSingle/>} />
      <Route exact path='/thankyou' element={<Thankyou/>} />
      <Route exact path='/chat' element={<Chat/>} />
      <Route exact path='/productform' element={<ProductFrom/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
