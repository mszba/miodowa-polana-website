import { useState } from 'react';
import { motion } from 'framer-motion';
import CookieConsent from 'react-cookie-consent';

import Navbar from '../components/Navbar/index';
import Aside from '../components/Aside';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { pageAnimation, tranistion } from '../components/animations';

import './cookieConsent.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={pageAnimation}
      transition={tranistion}>
      <Aside isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection />
      <InfoSection2 />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <CookieConsent
        disableStyles={true}
        buttonClasses='cookiesBtn'
        containerClasses='cookiesContainer'
        contentClasses='cookiesContent'
        buttonText='Zgoda'>
        Ta strona korzysta z ciasteczek, aby świadczyć usługi na najwyższym
        poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich
        użycie.
      </CookieConsent>
    </motion.div>
  );
};

export default Home;
