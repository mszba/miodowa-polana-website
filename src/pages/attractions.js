import Attractions from '../components/Attractions/index';
import { motion } from 'framer-motion';
import { animationTwo } from '../components/animations';

const AttractionsPage = () => {
  return (
    <motion.div initial='out' exit='out' animate='in' variants={animationTwo}>
      <Attractions />
    </motion.div>
  );
};

export default AttractionsPage;
