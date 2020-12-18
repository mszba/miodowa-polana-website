import { motion } from 'framer-motion';

import Gallery from '../components/Gallery/index';
import ScrollToTop from '../components/ScrollToTop';

import { pageAnimation } from '../components/animations';

const GalleryPage = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={pageAnimation}>
      <ScrollToTop />
      <Gallery />
    </motion.div>
  );
};

export default GalleryPage;
