import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Service from './Pages/Home/Service/Service';
import Login from './Pages/Login/Login';
import Signin from './Pages/Signin/Signin';
import Campaign from './Pages/Campaign/Campaign';
import Error from './Pages/Error/Error';
import Departments from './Pages/Departments/Departments';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Details from './Pages/Details/Details';
import Services from './Pages/Home/Services/Services';
import Cares from './Pages/Cares/Cares';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <Route path='/cares'>
              <Cares></Cares>
            </Route>
            <PrivateRoute path='/departments'>
              <Departments></Departments>
            </PrivateRoute>
            <PrivateRoute path='/details/:id'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signin'>
              <Signin></Signin>
            </Route>
            <PrivateRoute path='/campaign'>
              <Campaign></Campaign>
            </PrivateRoute>
            <Route path='*'>
              <Error></Error>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
