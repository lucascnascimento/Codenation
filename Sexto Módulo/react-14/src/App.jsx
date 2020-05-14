import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";

import "./App.scss";

class App extends React.Component {
  state = {
    contacts: [],
    filteredContacts: [],
    filterName: "name",
    searchField: "",
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

  // Salva o filtro escolhido no estado
  handleFilter = (e) => {
    const { name } = e.nativeEvent.target;

    this.setState({ filterName: name });
  };

  // Salva o resultado da barra de pesquisa no estado
  handleSearch = (e) => {
    const { value } = e.nativeEvent.target;

    this.setState({ searchField: value });
  };

  // Procura o contato pelo conteúdo da barra de pesquisa e por filtro
  searchContact = (searchField, filterName) => {
    if (searchField && filterName) {
      const result = this.state.contacts.filter((contact) => {
        /* Se o filtro for de data, converte a data do contato da base de dados 
        e checa se corresponde ao campo de pesquisa */
        if (filterName === "admissionDate") {
          const date = new Date(contact[filterName]).toLocaleDateString(
            "pt-BR"
          );
          return date.indexOf(searchField) > -1;
        } else {
          /* Checa se o conteúdo da barra de pesquisa é correspondente às 
          informações dos contatos */
          return (
            contact[filterName]
              .toLowerCase()
              .indexOf(searchField.toLowerCase()) > -1
          );
        }
      });
      this.setState({ filteredContacts: result });
    }
    // Se a barra de pesquisa estiver vazia retorna todos os contatos
    else {
      this.setState({ filteredContacts: this.state.contacts });
    }
  };

  // Chama searchContact para procura o contato após a atualização de estado
  componentDidUpdate(_, prevState) {
    if (
      this.state.searchField !== prevState.searchField ||
      this.state.filterName !== prevState.filterName
    )
      this.searchContact(this.state.searchField, this.state.filterName);
  }

  render() {
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          selectedFilter={this.state.filterName}
        />
        <Contacts filteredContacts={this.state.filteredContacts} />
      </div>
    );
  }
}

export default App;
