import Button from '@mui/material/Button/Button';
import FormControl from '@mui/material/FormControl/FormControl';
import FormLabel from '@mui/material/FormLabel/FormLabel';
import TextField from '@mui/material/TextField/TextField';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import * as React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Container, Grid } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.config';
import { useAuth } from '../../../contexts/AuthContext';

const Create = () => {
    const { t } = useTranslation();
    const d = new Date();
    const date = `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    const initValues = {
        number: '',
        date: date,
        supplier: '',
        supplierId: '',
        supplierAddress: '',
        receiver: '',
        receiverId: '',
        receiverAddress: '',
        item: {
            name: '',
            value: ''
        }
    }
    const [formData, setFormData] = useState(initValues)
    const { getUser } = useAuth();
    function handleFormChange(event): void {
        // update form datata with change
        const { name, value } = event.target;
        setFormData({...formData, [name]: value});
    }
    
    async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        console.log(formData);
    
        await addDoc(collection(db, "invoices"), {
            formData
        })
        .then((resp) => console.log(resp))   
        .catch((err) => {
            console.log(getUser())
            const [errCode, errMsg] = [err.code, err.message];
            console.log(errCode, "\n", errMsg)
            // todo snackbar msg
        })

        console.log('foo')
    }

    function handleCleanForm(event): void {
        event.preventDefault();
        console.log(formData)
        setFormData(initValues);
    }

    return (
        <Box component="form" onSubmit={handleSubmit} display='flex' flexGrow={1}>
        <FormControl>
        <Grid container direction="column">
            <Grid item>
                <FormLabel sx={{ fontSize: 20 }}>
                {t("createLabel")}
                </FormLabel>
            </Grid>

            <Grid item>
                <TextField 
                    name="number" 
                    value={formData.number}
                    label={t("inv.number")}
                    onChange={handleFormChange}
                />
                <TextField 
                    name="date" 
                    value={formData.date}
                    label={t("inv.date")}
                    InputLabelProps={{ shrink: true }}
                    disabled
                />
            </Grid>

            <Grid container item>
                <Grid container  item id="supplier" direction='column' >
                    <TextField 
                        name="supplier" 
                        value={formData.supplier} 
                        label={t("inv.supplier")} 
                        onChange={handleFormChange} 
                    />
                    <TextField 
                        name="supplierId"
                        value={formData.supplierId}
                        label={t("inv.supplierId")} 
                        onChange={handleFormChange}
                    />
                    <TextField 
                        name="supplierAddress"
                        value={formData.supplierAddress}
                        label={t("address")} 
                        onChange={handleFormChange}
                    />
                </Grid>
                
                <Grid container item id="receiver"  direction='column' >
                    <TextField 
                        name="receiver" 
                        value={formData.receiver} 
                        label={t("inv.receiver")} 
                        onChange={handleFormChange} 
                    />
                    <TextField 
                        name="receiverId" 
                        value={formData.receiverId} 
                        label={t("inv.receiverId")} 
                        onChange={handleFormChange} 
                    />
                    <TextField 
                        name="receiverAddress"
                        value={formData.receiverAddress}
                        label={t("address")} 
                        onChange={handleFormChange}
                    />
                </Grid>
            </Grid>

            <Grid container>
                <TextField 
                    name="item.name"
                    value={formData.item.name}
                    label={t("inv.item")} 
                    onChange={handleFormChange}
                />
                <TextField 
                    name="item.value"
                    value={formData.item.value}
                    label={t("inv.value")} 
                    onChange={handleFormChange}
                />
            </Grid>

            <Grid container item id="buttons-grid">              
                <Button color="warning" onClick={handleCleanForm} endIcon={<DeleteIcon />}>
                    {t("delete")}
                </Button>

                <Button type="submit" color="success" endIcon={<SendIcon />}>
                    {t("create")}
                </Button>
            </Grid>
        </Grid>
        </FormControl>
        </Box>
    );
};

export default Create;
