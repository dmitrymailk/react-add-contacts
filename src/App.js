import React from "react";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about/:id" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
