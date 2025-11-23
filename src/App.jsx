import { useMemo, useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './sections/Footer';
import PageTransition from './components/PageTransition';
import BookNowForm from './components/BookNowForm';

export const BookingContext = createContext();

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import DestinationsPage from './pages/DestinationsPage';
import PackageDetailPage from './pages/PackageDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import DomesticPackagesPage from './pages/DomesticPackagesPage';
import InternationalPackagesPage from './pages/InternationalPackagesPage';
import UttarakhandPackagesPage from './pages/UttarakhandPackagesPage';
import UttarakhandPackageDetailPage from './pages/UttarakhandPackageDetailPage';
import HimachalPackagesPage from './pages/HimachalPackagesPage';
import HimachalPackageDetailPage from './pages/HimachalPackageDetailPage';
import KashmirPackagesPage from './pages/KashmirPackagesPage';
import KashmirPackageDetailPage from './pages/KashmirPackageDetailPage';
import PackageDetailsPage from './pages/PackageDetailsPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const location = useLocation();
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const openBookingForm = () => setIsBookingFormOpen(true);
  const closeBookingForm = () => setIsBookingFormOpen(false);

  return (
    <BookingContext.Provider value={{ openBookingForm, closeBookingForm }}>
      <div className="bg-gradient-to-b from-night via-[#1a2d52] to-sand font-body text-slate-100">
        <ScrollToTop />
        <Navigation openBookingForm={openBookingForm} />
        <main className="pt-32">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/destinations" element={<DestinationsPage />} />
                <Route path="/packages" element={<PackageDetailPage />} />
                <Route path="/packages/domestic" element={<DomesticPackagesPage />} />
                <Route path="/packages/international" element={<InternationalPackagesPage />} />
                <Route path="/packages/uttarakhand" element={<UttarakhandPackagesPage />} />
                <Route path="/packages/uttarakhand/:id" element={<UttarakhandPackageDetailPage />} />
                <Route path="/packages/himachal" element={<HimachalPackagesPage />} />
                <Route path="/packages/himachal/:id" element={<HimachalPackageDetailPage />} />
                <Route path="/packages/kashmir" element={<KashmirPackagesPage />} />
                <Route path="/packages/kashmir/:id" element={<KashmirPackageDetailPage />} />
                <Route path="/package/:id" element={<PackageDetailsPage />} />
                <Route path="/services" element={<ServiceDetailPage />} />
                <Route path="/service/:id" element={<ServiceDetailsPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </main>
        <Footer currentYear={year} />
        <BookNowForm isOpen={isBookingFormOpen} onClose={closeBookingForm} />
      </div>
    </BookingContext.Provider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;