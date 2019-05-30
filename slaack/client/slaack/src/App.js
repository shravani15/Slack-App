import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Home from './components/Home';
import Login from './components/Login';
import Nav from './components/Nav';

class App extends Component {
    render () {
      return(
       
        <BrowserRouter>
         <div>
           <Nav />
           <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/auth/google" component={Login} />
        </Switch>
         </div>
        
        </BrowserRouter>
      )
    };
  };

export default App;
