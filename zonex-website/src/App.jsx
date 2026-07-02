import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import WhyUs from './WhyUs';
import Courses from './Courses';
import Stats from './Stats';
import Mentees from './Mentees';
import Footer from './Footer';
import Profit from './Profit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <WhyUs />
            <Courses />
            <Stats />
            <Mentees />
            <Footer />
          </main>
        } />
        
        <Route path="/profit" element={<Profit />} />
      </Routes>
    </Router>
  );
}

export default App;