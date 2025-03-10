
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import LogIn from './Pages/LogIn'
import Detalle from './Pages/Detalle'
import Header from "../src/Components/Header";
import Footer from './Components/Footer/Footer';
import { ProductProvider } from "../src/Context/ProductContext";

import './App.css'

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Detalle" element={<Detalle />} />
            <Route path="/LogIn" element={<LogIn />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ProductProvider>

  )
}

export default App