import React, { useState } from "react";

import SuccessMessage from "../../components/SuccessMessage";

import "./UserForm.scss";

const UserForm = () => {
  return (
    <div data-testid="user-form">
      <SuccessMessage />
    </div>
  );
};

export default UserForm;
