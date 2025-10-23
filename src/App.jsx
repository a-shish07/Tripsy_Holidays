import { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './sections/Footer';

import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import DestinationsPage from './pages/DestinationsPage';
import PackageDetailPage from './pages/PackageDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <Router>
      <div className="bg-night font-body text-white">
        <Navigation />
        <main className="pt-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackageDetailPage />} />
            <Route path="/services" element={<ServiceDetailPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer currentYear={year} />
      </div>
    </Router>
  );
}

export default App;