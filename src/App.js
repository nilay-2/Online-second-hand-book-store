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
import Myproducts from './pages/Myproducts';
import Couponform from './pages/Couponform';
import Search from './pages/Search';
import OrderFailed from './pages/OrderFailed';
import Category from './pages/Category';
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
      <Route exact path='/details/:id' element={<ShopSingle/>} />
      <Route exact path='/thankyou' element={<Thankyou/>} />
      <Route exact path='/fail' element={<OrderFailed/>} />
      <Route exact path='/chat' element={<Chat/>} />
      <Route exact path='/productform' element={<ProductFrom/>} />
      <Route exact path='/myproducts' element={<Myproducts/>} />
      <Route exact path='/couponform/:product' element={<Couponform/>} />
      <Route exact path='/search/:key' element={<Search/>} />
      <Route exact path='/category/:key' element={<Category/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
