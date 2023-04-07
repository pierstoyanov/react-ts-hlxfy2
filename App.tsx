import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './components/Home/Home';
import * as Layout from './components/layout';
import * as Msg from './components/notifications';

// Environment variables: 
// webpack -> process.env.
// vite buldler -> import.meta.env.

// i18n
import { useTranslation, Trans } from 'react-i18next';

import LanguageSelector from './components/LanguageSelector';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import useCookie from './hooks/useCookie';
import SignUp from './components/user/SignUp/SignUp';
import Logout from './components/user/Logout/Logout';
const Login = React.lazy(() => import('./components/user/Login/Login'));
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/logout" element={<Logout />} /> 
      </Routes>
    </div>
    <footer>
      {<Msg.CookieConsent />}
    </footer>
    </>
  );
}
