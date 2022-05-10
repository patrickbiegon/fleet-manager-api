import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../features/authentication/Login";
import HomePage from "../features/home/HomePage";

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PartnerDetailsPage from "../features/partners/PartnerDetailsPage";
import PartnerAddDetailsPage from "../features/partners/PartnerAddDetailsPage";
import Layout from "./Layout";
import UserListPage from "../features/users/UserListPage";
import UserDetailsPage from "../features/users/UserDetailsPage";
import PartnerListPage from "../features/partners/PartnerListPage";
import ResetPassword from "../features/authentication/ResetPassword";
import ConfirmPassword from "../features/authentication/ConfirmPassword";
import ChangeEmail from "../features/authentication/ChangeEmail";
import NotFound from "../features/errors/NotFound";
import ServerError from "../features/errors/ServerError";

function App() {
  return (
    <>
      <ToastContainer theme="colored" position="bottom-right" hideProgressBar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/reset-password" component={ResetPassword} />
        <Route exact path="/change-password" component={ConfirmPassword} />
        <Route exact path="/change-email" component={ChangeEmail} />
        <Route exact path="/not-found" component={NotFound} />
        <Route exact path="/error" component={ServerError} />
        <Layout>
          <Switch>
          <Route exact path="/"> <PartnerListPage /> </Route>
          <Route exact path="/partners"> <PartnerListPage /> </Route>
          <Route exact path="/partners/:id"><PartnerDetailsPage /></Route>
          <Route exact path="/newassessment"><PartnerAddDetailsPage /></Route>
          <Route exact path="/users"> <UserListPage /> </Route>
          <Route exact path="/users/:id"><UserDetailsPage /></Route>
          <Route path="*">
            <Redirect
              to={{
                pathname: "/not-found",
              }}
            />
          </Route>
          </Switch>
        </Layout>
      </Switch>
    </>
  );
}

export default App;
