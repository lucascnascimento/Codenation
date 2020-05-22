import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  return (
    <React.Fragment data-testid="user-form">
      <SuccessMessage />
    </React.Fragment>
  );
};

export default UserForm;
