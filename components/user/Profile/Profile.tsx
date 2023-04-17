import React, { useState } from "react";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from "@mui/material/Container";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTranslation } from "react-i18next";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const Profile = () => {
  const { t } = useTranslation();
  const { getCurrUser, remUser } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    <Container component="main" maxWidth="sm">

    <Button variant="outlined" onClick={handleClickOpen} startIcon={<DeleteIcon />} color="error">
      {t('delete')}
    </Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t('delete')}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {t('user.remMsg')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="error">{t('confirm')}</Button>
        <Button onClick={handleClose}>{t('cancel')}</Button>
        </DialogActions>
      </Dialog>
    
    </Container>
  );
}

export default Profile;