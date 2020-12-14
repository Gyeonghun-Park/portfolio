import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Skills from "../pages/Skills";
import NotFound from "../components/NotFound";
import Navigation from "../components/Navigation";

const MyRouter = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default MyRouter;
