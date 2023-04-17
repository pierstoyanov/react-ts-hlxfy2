import React, { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

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

const RemoveUsr = () => {
    const { t } = useTranslation();
    const { currUser, remUser } = useAuth(); 
    const navigate = useNavigate();
    
    const [ emailCheck, setEmailCheck ] = useState<string | null>(null)

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleRemClose = () => {
        // TODO check email match with usr.
        remUser()
            .then(() => {
                console.log(currUser)
                navigate('/') 
            })
            .catch((err) => {
                const [errCode, errMsg] = [err.code, err.message];
                console.log(errCode, "\n", errMsg)
                // todo snackbar msg
        })
        handleClose();
    };
        
    // useEffect(() => {

    // }, []);

    return (    
        <Container component="main" maxWidth="md">

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
                label={t("email.label")}
                type="email"
                fullWidth
                variant="standard"
                onChange={(e) => setEmailCheck(e.target.value) }
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} >{t('cancel')}</Button>
            <Button onClick={handleRemClose} color="error" disabled={!emailCheck}>
            {t('confirm')}
            </Button>
            </DialogActions>
        </Dialog>
        
        </Container>
    );
}

export default RemoveUsr;