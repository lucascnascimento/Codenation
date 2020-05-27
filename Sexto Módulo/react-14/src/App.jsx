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
    sortBottomUp: true,
  };

  // Pega os dados da API
  componentDidMount() {
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts").then(
      (response) => {
        if (response.status !== 200) {
          console.log("ERROR: " + response.status);
          return;
        }

        // Passa os contatos ordenados para o estado da aplicação
        response.json().then((data) => {
          const sortedContacts = this.sortContacts(
            this.state.filterName,
            data,
            this.state.sortBottomUp
          );

          this.setState({
            contacts: sortedContacts,
            filteredContacts: sortedContacts,
          });
        });
      }
    );
  }

  // Salva o filtro escolhido no estado
  handleFilter = (e) => {
    const { name } = e.nativeEvent.target;
    const { filterName, sortBottomUp } = this.state;

    // Se o usuário clicar duas vezes no mesmo fltro muda a ordem de ordenação
    const sort = name === filterName ? !sortBottomUp : true;

    this.setState({ filterName: name, sortBottomUp: sort });
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

      // Ordena os contatos filtrados
      const sortedContacts = this.sortContacts(
        filterName,
        result,
        this.state.sortBottomUp
      );

      this.setState({ filteredContacts: sortedContacts });
    }

    // Se a barra de pesquisa estiver vazia retorna todos os contatos ordenados
    else {
      const sortedContacts = this.sortContacts(
        filterName,
        this.state.contacts,
        this.state.sortBottomUp
      );

      this.setState({ filteredContacts: sortedContacts });
    }
  };

  // Ordena os contatos
  sortContacts = (filterName, contactsToSort, sortBottomUp) => {
    let sortedContacts;

    // Ordena por data
    if (filterName === "admissionDate") {
      sortedContacts = contactsToSort.sort((a, b) => {
        let dateA = new Date(a[filterName]);
        let dateB = new Date(b[filterName]);

        if (dateA.getTime() < dateB.getTime()) return -1;
        if (dateA.getTime() > dateB.getTime()) return 1;
        return 0;
      });
    } else {
      // Ordena pelos outros parâmetros
      sortedContacts = contactsToSort.sort((a, b) => {
        if (a[filterName] < b[filterName]) return -1;
        if (a[filterName] > b[filterName]) return 1;
        return 0;
      });
    }

    !sortBottomUp && sortedContacts.reverse();

    return sortedContacts;
  };

  // Chama searchContact para procurar o contato após a atualização de estado
  componentDidUpdate(_, prevState) {
    if (
      this.state.searchField !== prevState.searchField ||
      this.state.filterName !== prevState.filterName ||
      this.state.sortBottomUp !== prevState.sortBottomUp
    )
      this.searchContact(this.state.searchField, this.state.filterName);
  }

  render() {
    const { filterName, filteredContacts, sortBottomUp } = this.state;
    return (
      <div data-testid="app" className="app">
        <Topbar />
        <Filters
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          selectedFilter={filterName}
          sortBottomUp={sortBottomUp}
        />
        <Contacts filteredContacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
