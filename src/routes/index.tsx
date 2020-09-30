import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from  '../pages/Dashboard';
import Repository from  '../pages/RepositoriesReact';
import RepositoryVue from  '../pages/RepositoriesVue';

const Routes: React.FC = () => (

  <Switch>
    <Route path="/" exact component={Dashboard}/>
    <Route path="/repositoriesReact/"  component={Repository}/>
    <Route path="/repositoriesVue/"   component={RepositoryVue}/>
  </Switch>
)

export default Routes;
