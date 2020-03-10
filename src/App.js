import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';


const App =() => {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route  path='/project/:id' component={ProjectDetail} />
            <Route  path='/signin' component={Signin} />
            <Route  path='/signup' component={Signup} />
            <Route  path='/create' component={CreateProject}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
