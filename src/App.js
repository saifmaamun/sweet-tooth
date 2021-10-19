import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import Campaign from './Pages/Campaign/Campaign';
import Error from './Pages/Error/Error';
import Services from './Pages/Home/Services/Services';
import Camp from './Pages/Camp/Camp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signin'>
            <Signin></Signin>
          </Route>
          <Route path='/campaign'>
            <Campaign></Campaign>
          </Route>
          <Route path='/camp'>
            <Camp></Camp>
          </Route>
          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
