import './styles.css';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Staff from './pages/Staff';
import MSc from './pages/MSc';
import MPhil from './pages/MPhil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>     
          <Routes>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/staff' element={<Staff />} />
            <Route path='/mphil' element={<MPhil />} />
            <Route path='/msc' element={<MSc />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
  
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
