import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import AddImages from './components/AddImages'
import ViewImages from './components/ViewImages'
import Main from './components/Main'
import ImageList from './components/ImageList'
import CreateAlbum from './components/CreateAlbum'



render(
  <Router history ={browserHistory}>
  <Route path='/' component = {Main}>
  <Route path ='AddImages' component ={AddImages}/>
   <Route path ='ViewImages' component ={ViewImages}/>
   <Route path = 'ImageList' component ={ImageList}></Route>
   <Route path = 'CreateAlbum' component ={CreateAlbum}></Route>
   </Route>
   </Router>,
  document.getElementById('root')
);
