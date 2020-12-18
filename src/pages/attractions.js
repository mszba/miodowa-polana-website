import { motion } from 'framer-motion';

import Attractions from '../components/Attractions/index';
import ScrollToTop from '../components/ScrollToTop';

import { pageAnimation } from '../components/animations';

const AttractionsPage = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={pageAnimation}>
      <ScrollToTop />
      <Attractions />
    </motion.div>
  );
};

export default AttractionsPage;
