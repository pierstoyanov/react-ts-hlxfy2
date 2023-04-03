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

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CookieConsent = (): JSX.Element => {  
  // useCookie hook
  const [ cookie, updateCookie ] = useCookie("consentCookie", {});
  const [ open, setOpen ] = React.useState(false);

  const cookieValues = {}

  useEffect(() => {
    // cookie does not exist 
    if (cookie?.messageShown === undefined)
    {
      // create cookie, open dialogue
      updateCookie({
        "messageShown": false,
        "consent": false
      });

      setOpen(true);
    }
    else if (cookie.messageShown == false) {
      setOpen(true)
    }
  }, []);


  const setResultInCookie = (consent: Boolean) => {
    const newVars = {
      "messageShown": true,
      "consent": consent
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
          onClose={()=>setOpen(false)}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setResultInCookie(false)}>Disagree</Button>
            <Button onClick={() => setResultInCookie(true)}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
      )
      
    }</>
  );
};

export default CookieConsent;
