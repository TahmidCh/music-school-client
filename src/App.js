import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Admin from "./components/Admin/Admin";
import ManageLessons from "./components/Admin/ManageLessons";
import Payment from "./components/CheckOut/Payment";
import Review from "./components/CheckOut/Review";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home/Home";
import LessonsPage from "./components/LessonsPage/LessonsPage";
import Login from "./components/Login/Login";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'

export const UserContext = createContext();

function App() {

const [loggedInUser, setLoggedInUser]= useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/lessons">
          <LessonsPage></LessonsPage>
        </Route>
        <PrivateRoute path="/checkout/payment">
          <Payment></Payment>
        </PrivateRoute>
        <Route path="/checkout/review">
          <Review></Review>
        </Route>
        <Route path="/admin/teacher">
          <Admin></Admin>
        </Route>
        <PrivateRoute path="/admin/manage">
          <ManageLessons></ManageLessons>
        </PrivateRoute>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
