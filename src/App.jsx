import React from 'react';
import './index.css';
import './i18n';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';


const App = () => {

  return (
    <Router>
      <div className='w-full overflow-hidden'>
        <ToastContainer />

        <Routes>
          {/* Route for Products page with only Products and Footer */}
          <Route path="/product" element={
            <>
              <AllProducts />
              <Footer />
            </>
          } />

          {/* Default route for home page with Header, About, Contact, and Footer */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Products />
                <About />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
