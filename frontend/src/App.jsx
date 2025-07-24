import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Catalog from './pages/Catalog'
import NewArrivals from './pages/NewArrivals'
import MensNewArrivals from './pages/MensNewArrivals'
import WomensNewArrivals from './pages/WomensNewArrivals'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-sage-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/mens-new-arrivals" element={<MensNewArrivals />} />
            <Route path="/womens-new-arrivals" element={<WomensNewArrivals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App