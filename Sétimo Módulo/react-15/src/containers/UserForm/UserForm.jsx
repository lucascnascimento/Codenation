import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";
import UserProfile from "../UserProfile";

import "./UserForm.scss";

const UserForm = () => {
  const [name, setName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [avatar, setAvatar] = useState("");
  const [successfull, setSuccessfull] = useState(false);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "avatar":
        setAvatar(value);
        break;
      default:
        break;
    }
  };

  const handleClick = (e) => {
    //Lógica para a requisição put
    setSuccessfull(true);
  };

  return (
    <>
      <UserProfile avatar={avatar} name={name} username={username} />
      <section className="post__form" data-testid="user-form">
        <div className="container">
          <div className="post__form__wrapper">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Ex: Fulano da Silva"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <label>Usuário</label>
            <input
              type="text"
              placeholder="Ex: Fulano_da_Silva"
              name="username"
              value={username}
              onChange={handleInputChange}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ex: fulano@provedor.com"
              value={email}
              onChange={handleInputChange}
            />
            <label>
              Url da Imagem de Perfil (user a url da imagem do Linkedin)
            </label>
            <input
              type="text"
              name="avatar"
              placeholder="http://..."
              value={avatar}
              onChange={handleInputChange}
            />
            <button type="button" onClick={handleClick}>
              Cadastrar
            </button>
          </div>
        </div>
        {successfull && <SuccessMessage />}
      </section>
    </>
  );
};

export default UserForm;
