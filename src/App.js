import { Switch, Route, Router } from 'react-router-dom';
import browserHistory from './history';
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Article from './pages/Article';
import './App.css';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/project">
        <Project />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/article">
        <Article />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
