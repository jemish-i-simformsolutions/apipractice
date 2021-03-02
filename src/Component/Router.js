import React from "react";
import ReactDOM from "react-dom";
import User from "./User";
import {
  BrowserRouter,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Bmi_Index } from "./Bmi_Index";
import Customer from "./Customer";
import Cart from "./withRouter";
import "../Pro.css";

function GetHistory() {
  let history = useHistory();
  let location = useLocation();

  function handleClick() {
    history.push("/home");
  }
  return (
    <>
      <div>
        <button onClick={handleClick}>home</button>
      </div>
      <div>{JSON.stringify(location)}</div>
    </>
  );
}

export default function Router() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div id="titlebar">
            <NavLink id="tbtn" to="/home" activeStyle={{ fontWeight: "bold" }}>
              Home
            </NavLink>

            <NavLink
              id="tbtn"
              to="/bmi_index"
              activeStyle={{ fontWeight: "bold" }}
            >
              BMI-Index
            </NavLink>

            <NavLink
              id="tbtn"
              to="/profile"
              activeStyle={{ fontWeight: "bold" }}
            >
              Profile
            </NavLink>
          </div>
          <Switch>
            <Route path="/bmi_index">
              <Bmi_Index />
              <GetHistory />
            </Route>
            <Route path="/home">
              {() => {
                return <>"hello welocme home "</>;
              }}
            </Route>
            <Route path="/user/:fname/:lname">
              <User />
            </Route>
            <Route path="/customer">
              <Customer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/billpage">
              {(props) => {
                return <>{props.location.state.data}</>;
              }}
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
}
