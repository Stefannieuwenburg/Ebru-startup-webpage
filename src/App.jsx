
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import GroupCoaching from './pages/GroupCoaching';
import FeaturesPage from './pages/FeaturesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import CallToActionPage from './pages/CallToActionPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import BookFreeCallPage from './pages/BookFreeCallPage';
import PrivateCoaching from './pages/PrivateCoaching';  
import BannerPage from './pages/BannerPage';
import BusinessPage from './pages/BusinessPage';
import IndividualPage from './pages/IndividualPage';

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
                <BookFreeCallPage />
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
            path="/business"
            element={
              <Layout>
                <BusinessPage />
              </Layout>
            }
          />
          <Route
            path="/individual"
            element={
              <Layout>
                <IndividualPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
