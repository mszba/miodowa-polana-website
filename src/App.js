import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './pages/index';
import AttractionsPage from './pages/attractions';
import OfferPage from './pages/offer';
import GalleryPage from './pages/gallery';

import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import './App.css';

const Section = styled.section`
  /* overflow-x: hidden; */
`;

const App = () => {
  let location = useLocation();
  return (
    <Section>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' component={Home} exact />
          <Route path='/attractions' component={AttractionsPage} />
          <Route path='/offer' component={OfferPage} />
          <Route path='/gallery' component={GalleryPage} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
};

export default App;
