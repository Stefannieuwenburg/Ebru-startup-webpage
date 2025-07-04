
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import GroupCoaching from './pages/GroupCoaching';
import CorporateTraining from './pages/CorporateTraining';
import FeaturesPage from './pages/FeaturesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import CallToActionPage from './pages/CallToActionPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import NewsLetterPage from './pages/NewsLetterPage';
import PrivateCoaching from './pages/PrivateCoaching';  
import BannerPage from './pages/BannerPage';

const Layout = lazy(() => import('./layout/Layout'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          {/* Home route with multiple sections */}
          <Route
            path="/"
            element={
              <Layout>
                <HeroPage />
                <AboutPage />
                <BannerPage />
                <FeaturesPage />
                <TestimonialsPage />
                <FAQPage />
                <CallToActionPage />
                <NewsLetterPage />
              </Layout>
            }
          />

          {/* Other individual pages wrapped in Layout */}
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/private-coaching"
            element={
              <Layout>
                <PrivateCoaching />
              </Layout>
            }
          />
          <Route
            path="/group-coaching"
            element={
              <Layout>
                <GroupCoaching />
              </Layout>
            }
          />
          <Route
            path="/workshops"
            element={
              <Layout>
                <WorkshopsPage />
              </Layout>
            }
          />
          <Route
            path="/corporate-training"
            element={
              <Layout>
                <CorporateTraining />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
