import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { OurStoryPage } from './pages/OurStoryPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { ProgramDetailPage } from './pages/ProgramDetailPage';
import { ImpactPage } from './pages/ImpactPage';
import { StoriesPage } from './pages/StoriesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <Navbar />
      
      <div style={{ flexGrow: 1, paddingTop: isHomePage ? 0 : '76px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/programs/:slug" element={<ProgramDetailPage />} />
          <Route path="/initiatives" element={<ProgramsPage />} />
          <Route path="/initiatives/:slug" element={<ProgramDetailPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/success-stories" element={<ImpactPage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/get-involved" element={<Navigate to="/contact" replace />} />
          <Route path="/volunteer" element={<Navigate to="/contact" replace />} />
          <Route path="/donate" element={<Navigate to="/contact" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;

