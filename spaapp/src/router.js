import React from 'react';
import {Router, Route, browserHistory} from 'react-router'
//Layout
import MainLayout from './components/main-layout';
// import SearchLayout from './components/search-layout';
//Pages
import Home from './components/home';
import Print from './components/print';
import Web from './components/web';
import LostCats from './components/lostcats';
import Contacts from './components/contacts'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home}>
      </Route>
      <Route path="print" component={Print}>

      </Route>
      <Route path="Web" component={Web}>

      </Route>
      <Route path="lostcats" component={LostCats}>

      </Route>
      <Route path="contacts" component={Contacts}>

      </Route>


    </Route>
  </Router>
)
