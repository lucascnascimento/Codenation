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

    const formatDate = (admissionDate) => {
      const date = new Date(admissionDate);
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      let yyyy = date.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      return dd + "/" + mm + "/" + yyyy;
    };

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
          {formatDate(admissionDate)}
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
