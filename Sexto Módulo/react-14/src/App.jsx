import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";
import Contact from "./components/Contact";

class App extends React.Component {
  state = {
    contacts: [],
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
          this.setState({ contacts: data });
        });
      }
    );
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters />
        <Contacts />
        {this.state.contacts.map((contact) => (
          <Contact data={contact} />
        ))}
      </div>
    );
  }
}

export default App;
