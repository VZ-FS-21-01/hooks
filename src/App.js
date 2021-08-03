import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Hooks from './components/HookState';
import HookLife from './components/HookLife';

import { UserContext } from './context/UserContext'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <Router>
      {/* So stellen wir allen Componenten, die dazwischen liegen Daten zur Verfügung */}
      <UserContext.Provider value={{ count, setCount }}>
        <div>
          <Nav />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/hooks" component={Hooks} />
            <Route path="/lifecycle" component={HookLife} />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
