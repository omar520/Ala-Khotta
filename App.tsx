import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen font-sans text-stone-900 bg-stone-50 selection:bg-amber-200 selection:text-amber-900 flex flex-col">
          <Navbar />
          <CartDrawer />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;