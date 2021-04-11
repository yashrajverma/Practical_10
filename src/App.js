import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Navbar from "./components/Navbar";
import Page404 from "./screens/Page404";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/404" component={Page404} />
        <Redirect to="/404" />

      </Switch>
    </>
  );
}

export default App;
