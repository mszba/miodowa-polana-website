import { motion } from 'framer-motion';

import Offer from '../components/Offer/index';
import ScrollToTop from '../components/ScrollToTop';

import { pageAnimation } from '../components/animations';

const OfferPage = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={pageAnimation}>
      <ScrollToTop />
      <Offer />
    </motion.div>
  );
};

export default OfferPage;
