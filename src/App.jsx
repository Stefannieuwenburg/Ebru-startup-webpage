import { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//  Modal imported from components
import ContactModal from './pages/ContactModal';

// Lazy-loaded layout
const Layout = lazy(() => import('./layout/Layout'));

// Pages
import HeroPage from './pages/HeroPage';
import MyMissionPage from './pages/MyMissionPage';
import GroupCoaching from './pages/GroupCoaching';
import RhythmPage from './pages/RhythmPage';
import TestimonialsPage from './pages/TestimonialsPage';
import WorkShops from './pages/WorkShops';
import FAQPage from './pages/FAQPage';
import BannerBookFreeCall from './pages/BannerBookFreeCall';
import PrivateCoaching from './pages/PrivateCoaching';
import BusinessPage from './pages/BusinessPage';
import IndividualPage from './pages/IndividualPage';
import WorkShopB from './pages/WorkShopB';
import TeamBuildingWorkShops from './pages/TeamBuildingWorkShops';
import ExecutiveCoaching from './pages/ExecutiveCoaching';
import EventEnergizer from './pages/EventEnergizer';
import ServicePage from './pages/ServicePage';
import FounderBanner from './pages/FounderBanner';
import FounderStory from './pages/FounderStory';
import PhilosophyPage from './pages/PhilosophyPage';
import NotFound from './pages/NotFound';
import BannerBreathe from './pages/BannerBreathe';
import BannerJourney from './pages/BannerJourney';


function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <ContactModal
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Layout setShowContactModal={setShowContactModal}>
                <HeroPage />
                <MyMissionPage setShowContactModal={setShowContactModal} /> 
                <BannerBreathe />
                <ServicePage />
                <TestimonialsPage />
                <FAQPage />
                <BannerJourney />
                <RhythmPage />
                <FounderBanner />
                <FounderStory />
                <BannerBookFreeCall setShowContactModal={setShowContactModal} />
                <PhilosophyPage />
              </Layout>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout setShowContactModal={setShowContactModal}>
                <div className="p-8 text-center font-sans text-lg">
                  Contact us via the modal or drop us a note anytime.
                </div>
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
          <Route path="/private-coaching" element={<Layout setShowContactModal={setShowContactModal}><PrivateCoaching /></Layout>} />
          <Route path="/group-coaching" element={<Layout setShowContactModal={setShowContactModal}><GroupCoaching /></Layout>} />
          <Route path="/workshops" element={<Layout setShowContactModal={setShowContactModal}><WorkShops /></Layout>} />
          <Route path="/workshopb" element={<Layout setShowContactModal={setShowContactModal}><WorkShopB /></Layout>} />
          <Route path="/team-building-workshops" element={<Layout setShowContactModal={setShowContactModal}><TeamBuildingWorkShops /></Layout>} />
          <Route path="/executive-coaching" element={<Layout setShowContactModal={setShowContactModal}><ExecutiveCoaching /></Layout>} />
          <Route path="/event-energizer" element={<Layout setShowContactModal={setShowContactModal}><EventEnergizer /></Layout>} />
          <Route path="/business" element={<Layout setShowContactModal={setShowContactModal}><BusinessPage /></Layout>} />
          <Route path="/individual" element={<Layout setShowContactModal={setShowContactModal}><IndividualPage /></Layout>} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;

