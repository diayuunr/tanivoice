import './App.css'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Petani from './pages/Petani'
import Pembeli from './pages/Pembeli'
import KonsulTani from './pages/KonsulTani'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard'
import EduTani from './pages/EduTani'
import Tracking from './pages/Tracking'
import Geng from './pages/Geng'
import Hot from './pages/hot'
import TaniMart from './pages/TaniMart'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jadipetani' element={<Petani />} />
        <Route path='/jadipembeli' element={<Pembeli />} />
        <Route path='/konsultani' element={<KonsulTani />} />
        <Route path='/misi' element={<Leaderboard />} />
        <Route path='/edutani' element={<EduTani />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/gengs' element={<Geng />} />
        <Route path='/hotline' element={<Hot />} />
        <Route path='/mart' element={<TaniMart />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;