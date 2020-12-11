import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/index';
import AttractionsPage from './pages/attractions';
import OfferPage from './pages/offer';
import GalleryPage from './pages/gallery';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/attractions' component={AttractionsPage} exact />
        <Route path='/offer' component={OfferPage} exact />
        <Route path='/gallery' component={GalleryPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
