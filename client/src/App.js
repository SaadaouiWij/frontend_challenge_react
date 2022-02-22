import React from "react";

import listPhones from "./pages/Phones/listPhones";
import DetailsPhone from "./pages/Phones/DetailsPhone";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@mui/material";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  

  return (
    <div>
      <Container fixed>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={listPhones} exact />
            <Route path="/details/:id" component={DetailsPhone} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
