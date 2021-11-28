import './App.css';
import { Switch, Route } from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Home from './Home';

function App() {
  return (
      <main>
          <Switch>
              <Route exact path="/" component={Home} exact />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
      </main>
  )
}

export default App;
