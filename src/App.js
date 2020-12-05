import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
