import Offer from '../components/Offer/index';
import { motion } from 'framer-motion';
import { animationThree, tranistion } from '../components/animations';

const OfferPage = () => {
  return (
    <motion.div
      initial='out'
      exit='out'
      animate='end'
      variants={animationThree}>
      <Offer />
    </motion.div>
  );
};

export default OfferPage;
