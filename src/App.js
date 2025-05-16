import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NotFound from './pages/notFound';
import ProductDetails from './pages/productDetails';
import ProtectedRoute from './Routes/route';
import Footer from './components/footer';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

function App() {
  return (
    <Router>
      <Header /> {/* This goes outside Routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/productdetails'
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
