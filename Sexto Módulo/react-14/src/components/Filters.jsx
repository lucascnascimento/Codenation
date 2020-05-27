import React from "react";

class Filters extends React.Component {
  render() {
    const {
      handleFilter,
      handleSearch,
      selectedFilter,
      sortBottomUp,
    } = this.props;
    return (
      <React.Fragment>
        <div className="container" data-testid="filters">
          <section className="filters">
            <div className="filters__search">
              <input
                type="text"
                className="filters__search__input"
                placeholder="Pesquisar"
                name="search_bar"
                onChange={handleSearch}
              />

              <button className="filters__search__icon" name="search">
                <i className="fa fa-search" />
              </button>
            </div>

            <button
              className={`filters__item ${
                selectedFilter === "name" ? "is-selected" : ""
              }`}
              name="name"
              onClick={handleFilter}
            >
              Nome
              <i
                className={`fa ${sortBottomUp ? "fa-sort-up" : "fa-sort-down"}`}
              />
            </button>

            <button
              className={`filters__item ${
                selectedFilter === "country" ? "is-selected" : ""
              }`}
              name="country"
              onClick={handleFilter}
            >
              País
              <i
                className={`fa ${sortBottomUp ? "fa-sort-up" : "fa-sort-down"}`}
              />
            </button>

            <button
              className={`filters__item ${
                selectedFilter === "company" ? "is-selected" : ""
              }`}
              name="company"
              onClick={handleFilter}
            >
              Empresa
              <i
                className={`fa ${sortBottomUp ? "fa-sort-up" : "fa-sort-down"}`}
              />
            </button>

            <button
              className={`filters__item ${
                selectedFilter === "department" ? "is-selected" : ""
              }`}
              name="department"
              onClick={handleFilter}
            >
              Departamento
              <i
                className={`fa ${sortBottomUp ? "fa-sort-up" : "fa-sort-down"}`}
              />
            </button>

            <button
              className={`filters__item ${
                selectedFilter === "admissionDate" ? "is-selected" : ""
              }`}
              name="admissionDate"
              onClick={handleFilter}
            >
              Data de admissão
              <i
                className={`fa ${sortBottomUp ? "fa-sort-up" : "fa-sort-down"}`}
              />
            </button>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;
