import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import SinglePost from './components/SinglePost';
import RoutesWithNavigation from './components/RoutesWithNavigation';
import SideNavPage from './components/sidebarcompany.jsx';
import TopNavigation from './components/SideNavigation';
import FormPage1 from './components/newform.component.jsx';
import FooterPage from './components/footer.component.js';
import NavbarPage from './components/navbar.component.jsx';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Pricing from './components/pages/Pricing';
import Lock from './components/pages/Lock';
import About from './components/pages/About';
import PostListing from './components/pages/PostListing';
import Landing from './components/pages/Landing';



function App() {
  return (
    <div class = "Home">
      <NavbarPage />
      <Switch>
        <Route exact path="/user/:userId/abc" component={SideNavPage} />
        
       



        
        <Route path='/new' component={FormPage1} />
        <Route exact path="/user/:userId/nav" component={TopNavigation} />
        <Route path='/pages/login' exact component={Login} />
      <Route path='/pages/register' exact component={Register} />
      <Route path='/pages/pricing' exact component={Pricing} />
      <Route path='/pages/lock' exact component={Lock} />
      <Route path='/pages/about' exact component={About} />
      <Route path='/pages/post' exact component={SinglePost} />
      <Route path='/pages/posts' exact component={PostListing} />
      <Route path='/pages/landing' exact component={Landing} />
      <RoutesWithNavigation />
      </Switch>
      
      <FooterPage />
      
    </div>
    
  );
}

export default App;








