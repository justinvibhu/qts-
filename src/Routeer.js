import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';

function Routees() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={<Login />} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </Router>

  );
}
export default App;