import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/sass/main.css";
import MainScreen from "./components/MainScreen";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  BrowserRouter,
} from "react-router-dom";
import ModalA from "./components/ModalA";
import ModalB from "./components/ModalB";
import Signup from "./components/Signup";
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/modala" component={ModalA} />
        <Route exact path="/modalb" component={ModalB} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </>
  );
}

export default App;
