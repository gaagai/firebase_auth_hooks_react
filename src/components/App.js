import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import useAuth from "./Auth/useAuth";
import CreateLink from "./Link/CreateLink";
import SearchLink from "./Link/SearchLinks";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import LinkDetail from "./Link/LinkDetail";
import LinkList from "./Link/LinkList";
import Header from "./Header";
import firebase, { FirebaseContext } from "../firebase";

function App() {
  const user = useAuth();
  return (
    <BrowserRouter>
      <FirebaseContext.Provider value={{ user, firebase }}>
        <div className="app-container">
          <Header />
          <div className="route-container">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/new/1" />} />
              <Route path="/create" component={CreateLink} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={ForgotPassword} />
              <Route path="/search" component={SearchLink} />
              <Route path="/top" component={LinkList} />
              <Route path="/new/:page" component={LinkList} />
              <Route path="/link/:linkId" component={LinkDetail} />
            </Switch>
          </div>
        </div>
      </FirebaseContext.Provider>
    </BrowserRouter>
  );
}

export default App;
