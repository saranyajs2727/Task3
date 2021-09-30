import Header from './Components/Header'
import Block from './Components/Block'
import Images from './Components/Images'
import Home from './Components/Home'
import Write from './Components/Write'
import './App.css';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
 <BrowserRouter>
     <Switch>
      <Route  path='/signup' component={Signup} />
      <Route  path='/login' component={Login} />
       <Route exact path='/header' component={Header} />
    </Switch>
  </BrowserRouter> 
  <Block />
  <Images />
  <Write />   
    </div>
  );
}

export default App;
