import { motion } from 'framer-motion';

import Offer from '../components/Offer/index';
import ScrollToTop from '../components/ScrollToTop';

import { animationThree } from '../components/animations';

const OfferPage = () => {
  return (
    <motion.div
      initial='out'
      exit='out'
      animate='end'
      variants={animationThree}>
      <ScrollToTop />
      <Offer />
    </motion.div>
  );
};

export default OfferPage;
