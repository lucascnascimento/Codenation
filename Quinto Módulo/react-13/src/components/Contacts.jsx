import React from "react";

import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="contacts">
            <Contact />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;
