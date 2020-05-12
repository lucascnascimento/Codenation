import React from "react";

class Contact extends React.Component {
  render() {
    const {
      avatar,
      name,
      phone,
      country,
      admissionDate,
      company,
      department,
    } = this.props.data;

    return (
      <React.Fragment>
        <article className="contact" data-testid="contact">
          <div className="contact__avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <span className="contact__data">{name}</span>
          <span className="contact__data">{phone}</span>
          <span className="contact__data">{country}</span>
          <span className="contact__data">{admissionDate}</span>
          <span className="contact__data">{company}</span>
          <span className="contact__data">{department}</span>
        </article>
      </React.Fragment>
    );
  }
}

export default Contact;
