import Gallery from '../components/Gallery/index';
import { motion } from 'framer-motion';
import { animationOne } from '../components/animations';

const GalleryPage = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <Gallery />
    </motion.div>
  );
};

export default GalleryPage;
