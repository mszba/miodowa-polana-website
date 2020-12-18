import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/index';
import AttractionsPage from './pages/attractions';
import OfferPage from './pages/offer';
import GalleryPage from './pages/gallery';

import { AnimatePresence } from 'framer-motion';

import './App.css';

const App = () => {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path='/' component={Home} exact />
        <Route path='/attractions' component={AttractionsPage} />
        <Route path='/offer' component={OfferPage} />
        <Route path='/gallery' component={GalleryPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
