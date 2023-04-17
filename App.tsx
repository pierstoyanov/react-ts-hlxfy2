import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

// Environment variables: 
// webpack -> process.env.
// vite buldler -> import.meta.env.

// i18n
import { useTranslation, Trans } from 'react-i18next';
// Components
import Home from './components/Home/Home';
import * as Usr from './components/user';
import * as Item from './components/item';
import * as Layout from './components/layout';
import * as Msg from './components/notifications';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import useCookie from './hooks/useCookie';
const About = React.lazy(() => import('./components/About/About'))


export default function App() {
  // i18n
  const { t } = useTranslation();

  // consent cookie
  const [ cookie, updateCookie ] = useCookie("consentCookie", {});
  const [ shown, setShown ] = React.useState(false);
  // console.log(cookie["messageShown"]);

  return (
    <>
    <header>

    </header>
    <div>
      <div>{<Layout.Navbar />}</div> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading" element={<LoadingScreen />} />

        <Route path="/login" element={<Usr.Login />} />
        <Route path="/signup" element={<Usr.SignUp />} />
        <Route path="/logout" element={<Usr.Logout />} />
        <Route path="/profile" element={<Usr.Profile />} />
        {/* <Route path="/rmu" element={<Usr.RemoveUsr />} /> */}

        <Route path="/create" element={<Item.Create />} />
        <Route path="/read" element={<Item.Read />} />
        <Route path="/update" element={<Item.Update />} />
        <Route path="/delete" element={<Item.Delete />} />

        <Route path="/about" element={<About />} />

      </Routes>
    </div>
    <footer>
      {<Msg.CookieConsent />}
    </footer>
    </>
  );
}
