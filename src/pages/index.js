import { useState } from 'react';

import Navbar from '../components/Navbar/index';
import Aside from '../components/Aside';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import InfoSection2 from '../components/InfoSection2';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { motion } from 'framer-motion';
import { animationOne, tranistion } from '../components/animations';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
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
    </motion.div>
  );
};

export default Home;
