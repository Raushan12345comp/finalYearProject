import { Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import NavMain from "./components/navbar/NavMain";
import Footer from "./components/Footer/footer";
import Login from "./components/Register/Login";
import Signup from "./components/Register/SignUp";
import ForgotPassword from "./components/Register/ForgotPassword";
import Page404 from "./components/404_page/Page404.jsx";
import Contact from "./components/Contact/Contact.jsx";
import AddNewCategory from "./components/Categories/AddNewCategory";

function App() {
  return (
    <div>
      <NavMain />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/ForgotPassword" component={ForgotPassword} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/addNewCategory" component={AddNewCategory} />
          <Route component={Page404} />
        </Switch>

      <Footer />
    </div>
  );
}

export default App;
