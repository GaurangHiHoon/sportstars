import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "./components/navbar";
import { Route, Switch } from "react-router-dom";
import ShowData from "./components/showdata";
import ShowDetails from "./components/showdetails";

function App() {
  return (
    <>
      <NavBar />

      <Switch>
        <Route
          path="/stars/Cricket"
          render={(props) => <ShowData value="Cricket" {...props} />}
        />
        <Route
          path="/stars/Football"
          render={(props) => <ShowData value="Football" {...props} />}
        />
        <Route
          path="/stars"
          render={(props) => <ShowData value="" {...props} />}
        />
        <Route
        path="/details/:id"
        component={ShowDetails}/>
      </Switch>
    </>
  );
}

export default App;
