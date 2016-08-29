import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import AddImages from './components/AddImages'
import Main from './components/Main'



render(
  <Router history ={browserHistory}>
  <Route path='/' component = {Main}>
  <Route path ='AddImages' component ={AddImages}/>
   </Route>
   </Router>,
  document.getElementById('root')
);
