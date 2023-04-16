import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import useCookie from '../../../hooks/useCookie';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CookieConsent = (): JSX.Element => {  
  // i18n
  const { t } = useTranslation();

  // useCookie hook
  const [ cookie, updateCookie ] = useCookie("consentCookie", {});
  const [ open, setOpen ] = React.useState(false);


  useEffect(() => {
    // cookie does not exist 
    if (cookie?.messageShown === undefined) {
      console.log('foo')
      // create cookie, open dialogue
      updateCookie({
        messageShown: 0,
        consent: 0
      });

      setOpen(true);
    }
    else if (cookie.messageShown == 0) {
      console.log('bar')
      setOpen(true)
    }
    console.log('barfoo')
  }, []);


  const setResultInCookie = (consent: Number) => {
    const newVars = {
      messageShown: 1,
      consent: consent
    }
    
    updateCookie(newVars);
    setOpen(false);
    // Dispatch consent to log
  };

  const closeDiag = () => {
    const newVars = {
      messageShown: 1,
      consent: 0
    }
    
    updateCookie(newVars);
    setOpen(false);
  };

  return (
    <>{
      // {consentCookie} &&  
      (
      <div>
        {/* {consentCookie} */}
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={()=>closeDiag()}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{t("Cookies")}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {t("cookies-msg")}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Tooltip title={t("cookies-disagree-explain")}>
              <Button onClick={() => setResultInCookie(0)}>{t("cookies-disagree")}</Button>
            </Tooltip>
            <Tooltip title={t("cookies-agree-explain")}>
              <Button onClick={() => setResultInCookie(1)}>{t("cookies-agree")}</Button>
            </Tooltip>
          </DialogActions>
        </Dialog>
      </div>
      )  
    }</>
  );
};

export default CookieConsent;
