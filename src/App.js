import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
