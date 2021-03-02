import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  NavLink,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

export function Bmi_Index() {
  let height;
  let weight;
  let match = useRouteMatch();
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Weight:</td>
            <td>
              <input
                type="number"
                placeholder="In KGs"
                onChange={(event) => {
                  weight = event.target.value;
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Height:</td>
            <td>
              <input
                type="number"
                placeholder="In Metere "
                onChange={(event) => {
                  height = event.target.value;
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button
                type="submit"
                onClick={() => {
                  document.getElementById(
                    "result"
                  ).innerText = `Your BMI Index is ${
                    weight / (height * height)
                  } `;
                }}
              >
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div id="result"></div>
      <BrowserRouter>
        <NavLink to={`${match.url}/bmi_chart`}>BMI Chart</NavLink>
        <Switch>
          <Route path={`${match.path}/bmi_chart`}>
            {() => {
              return (
                <>
                  <br />
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8pH0gPpESPtU2XpbiRzbXAFdarpjHeHUoQg&usqp=CAU"
                    height="200"
                    width="250"
                  ></img>
                </>
              );
            }}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
