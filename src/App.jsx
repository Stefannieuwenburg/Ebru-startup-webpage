
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import HeroPage from './pages/HeroPage';
import AboutPage from './pages/AboutPage';
import GroupCoaching from './pages/GroupCoaching';
import CorporateTraining from './pages/CorporateTraining';
import FeaturesPage from './pages/FeaturesPage';
import ServicePage from './pages/ServicesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WorkshopsPage from './pages/WorkshopsPage';
import CallToActionPage from './pages/CallToActionPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import NewsLetterPage from './pages/NewsLetterPage';
import PrivateCoaching from './pages/PrivateCoaching';  
function App() {

  const Layout = lazy(() => import('./layout/Layout'));
 
  return (
    <>
     <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HeroPage />
                <AboutPage /> {/* HomePage  Welkom bij Life Coaching van breathandbodymovement*/}
                <ServicePage /> {/* a card page how we can help */}
                <FeaturesPage /> {/*it has links to TrainingPage, CoachingPage, WorkshopsPage */}
                <TestimonialsPage />
                <FAQPage /> {/* Frequently Asked Questions */}
                <CallToActionPage /> {/* AboutPage white action */}
                <NewsLetterPage /> {/* Newsletter */}
              {/* Themp pages belwow are not linked to the main page, but can be accessed directly via their URLs. */}
                <ContactPage /> {/* Contact page with form */}
                <PrivateCoaching />
                <GroupCoaching />
                <WorkshopsPage />
                <CorporateTraining/>
              </Layout>
            }
          />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
     </Suspense>
    </>
  )
}

export default App;
