import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import RemoveUsr from "../RemoveUsr/RemoveUsr";

const Profile = () => {
  const { t } = useTranslation();
  const { currUser, getCurrUser, remUser } = useAuth();
  const navigate = useNavigate();


  const handleRem = async (event) => {
    console.log(getCurrUser())

    
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const d = {
      email: data.get("email"),
      password: data.get("password"),
    }

    await remUser(d.email, d.password)
      .then((userCredential) => {
        console.log(getCurrUser())
        navigate('/') 
      })
      .catch((err) => {
        const [errCode, errMsg] = [err.code, err.message];
        console.log(errCode, "\n", errMsg)
        // todo snackbar msg
      })
  };

  return (
    <>
      {<RemoveUsr />}
    </>
  );
}

export default Profile;