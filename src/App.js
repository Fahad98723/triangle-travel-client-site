import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Booking from './Pages/Booking/Booking';
import LogIn from './Pages/LogIn/LogIn';
import Header from './Pages/Shared/Header/Header';
import AddNewDestination from './Pages/AddNewDestination/AddNewDestination';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllBooking from './Pages/ManageAllBooking/ManageAllBooking';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="body">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route  path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route path='/addNewDestination'>
              <AddNewDestination></AddNewDestination>
            </Route>
            <Route path='/manageAllBooking'>
              <ManageAllBooking></ManageAllBooking>
            </Route>
            <PrivateRoute  path='/booking/:id'>
              <Booking></Booking>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
