import './App.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Setting from './pages/Setting';
import Leroum from './pages/Leroum';


const App=()=> {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/loreum' component={Leroum} />
        <Route path='/setting' component={Setting} />
      </Switch>
    </Router>
      
    
    </>
  );
}
export default App;
