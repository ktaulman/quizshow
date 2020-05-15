import React from 'react';
import RouteHome from './RouteHome';
import {Route} from 'react-router-dom';

export default {
    component: Route,
    title: 'Routes',
  };

  export const HomePageRoute=()=>(
        <RouteHome/>    
  )
