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
      <article className="contact container" data-testid="contact">
        <div className="contact__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <span className="contact__data" data-testid="contact-name">
          {name}
        </span>
        <span className="contact__data" data-testid="contact-phone">
          {phone}
        </span>
        <span className="contact__data" data-testid="contact-country">
          {country}
        </span>
        <span className="contact__data" data-testid="contact-date">
          {new Date(admissionDate).toLocaleDateString("pt-BR")}
        </span>
        <span className="contact__data" data-testid="contact-company">
          {company}
        </span>
        <span className="contact__data">{department}</span>
      </article>
    );
  }
}

export default Contact;
