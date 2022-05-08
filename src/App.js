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
import AddNewCategory from "./components/ProjectCategories/AddNewCategory";
import CategoryList from "./components/ProjectCategories/CategoryList";
import UpdateCategory from "./components/ProjectCategories/UpdateCateg"

import AdminRoute from './components/navbar/ProtectedRoutes/AdminRoute'
import PrivateProtectRoute from './components/navbar/ProtectedRoutes/PrivateProtectRoute'
import UploadProject from "./components/Posts/CreateProject";
import UploadPaper from "./components/Posts/CreatePublication";
import AllProjects from './components/Posts/AllProjects'
import AllPaper from './components/Posts/AllPaper'
import AddNewPaperCategory from "./components/PaperCategory/AddNewCategory";
import PaperCategoryList from "./components/PaperCategory/CategoryList";
import PaperUpdateCategory from "./components/PaperCategory/UpdateCateg"

import ProjectDetails from "./components/Posts/ProjectDetails";

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
          
          <AdminRoute
          exact
          path="/update-category/:id"
          component={UpdateCategory}
        />
        <AdminRoute
        exact
        path="/update-paper-category/:id"
        component={PaperUpdateCategory}
      />
        <AdminRoute exact path="/addNewCategory" component={AddNewCategory} />
        <AdminRoute exact path="/addpaper_category" component={AddNewPaperCategory} />
        <AdminRoute exact path="/category-list" component={CategoryList} />
        <AdminRoute exact path="/papercategory-list" component={PaperCategoryList} />
        <PrivateProtectRoute exact path="/upload-project" component={UploadProject} />
        <PrivateProtectRoute exact path="/upload-paper" component={UploadPaper} />
        <PrivateProtectRoute exact path="/projects" component={AllProjects} />
        <PrivateProtectRoute exact path="/papers" component={AllPaper} />
        <Route exact path="/project/:id" component={ProjectDetails} />
          <Route component={Page404} />
        </Switch>

      <Footer />
    </div>
  );
}

export default App;
