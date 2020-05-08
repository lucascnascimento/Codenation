import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
  state = {
    contacts: [],
    filteredContacts: [],
  };

  // Pega os dados da API
  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts").then(
      (response) => {
        if (response.status !== 200) {
          console.log("ERROR: " + response.status);
          return;
        }

        // Passa os contatos para o estado da aplicação
        response.json().then((data) => {
          this.setState({ contacts: data, filteredContacts: data });
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts contacts={this.state.filteredContacts} />
      </React.Fragment>
    );
  }
}

export default App;
