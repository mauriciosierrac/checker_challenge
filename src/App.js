import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { About } from './components/About';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar'

function App() {
  return (
   <Router>
     <Navbar />
     <div className="container p-4">
       <Switch>
         <Route path="/about" component={About}/>
         <Route path="/" component={Home}/>
       </Switch>
     </div>
   </Router>
  );
}

export default App;
