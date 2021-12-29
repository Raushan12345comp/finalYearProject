import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/pages/AboutPage";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import Teams from "./components/pages/Teams";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/footer";
import Login from './components/Register/Login'
import Signup from './components/Register/SignUp'
import ForgotPassword from "./components/Register/ForgotPassword";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"  component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/team" component={Teams} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/ForgotPassword" component={ForgotPassword} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
