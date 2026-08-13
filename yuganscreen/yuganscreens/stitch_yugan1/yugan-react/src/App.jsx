import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import Gallery from './pages/Gallery'
import Contact from './pages/contact'
import AboutUs from './pages/AboutUs'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen">
        <TopNav />
        <div className="pt-[88px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
