import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Teams from "./components/pages/Teams";
import Navbar from "./components/navbar/Navbar";
import UpperNav from './components/navbar/UpperNav'
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div>
      <UpperNav />
      <Navbar />
      <Switch>
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/team" component={Teams} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
