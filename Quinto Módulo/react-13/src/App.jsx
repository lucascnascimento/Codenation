import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
  // Pega os dados da API
  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then(function (response) {
        if (response.status !== 200) {
          console.log("ERROR: " + response.status);
          return;
        }

        // Examine the text in the response
        response.json().then(function (data) {
          console.log(data);
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts />
      </React.Fragment>
    );
  }
}

export default App;
