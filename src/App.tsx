import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ParticlesBackground />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
