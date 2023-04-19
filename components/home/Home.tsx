import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getFlagEmoji } from '../../common/getFlagEmoji';
import { useCallback, useEffect, useRef, useState } from 'react';
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';
import Paper from '@mui/material/Paper/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchData = useCallback(async () => {
    // , orderBy('created', 'desc')
    const q = query(collection(db, 'invoices'));
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot)
    const i: any[] = [];
    querySnapshot.docs.map(doc => (
      i.push({
        id: doc.id,
        data: doc.data()
      })
    ));

    setItems(i);
  }, []);

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <React.Fragment>
      <div>
      <h1>{t('Home')}</h1>

      <h3>{t('createdInv')}</h3>
      {loading 
        ?<LoadingScreen /> 
      :<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">{t("inv.number")}</TableCell>
            <TableCell align="center">{t("inv.date")}</TableCell>
            <TableCell align="center">{t("inv.supplier")}</TableCell>
            <TableCell align="center">{t("inv.receiver")}</TableCell>
          </TableRow>
        </TableHead>
  
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.data.number}
              </TableCell>
              <TableCell align="right">{row.data.date}</TableCell>
              <TableCell align="right">{row.data.supplier}</TableCell>
              <TableCell align="right">{row.data.receiver}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    }
    </div>
    </React.Fragment>
  );
};

export default Home;
