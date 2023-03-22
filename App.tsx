import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './components/home/Home';
import * as Layout from './components/layout';
import * as Msg from './components/notifications';

// Environment variables: 
// webpack -> process.env.
// vite buldler -> import.meta.env.

// i18n
import { useTranslation, Trans } from 'react-i18next';

import LanguageSelector from './components/LanguageSelector';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
const Login = React.lazy(() => import('./components/user/Login/Login'));
const About = React.lazy(() => import('./components/About/About'))


export default function App() {
  // i18n
  const { t } = useTranslation();

  return (
    <>
    <header>
    <div>{<Layout.Navbar />}</div>
    </header>
    <body>
    <div>

      
      {<Msg.CookieConsent />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/loading" element={<LoadingScreen />} />
      </Routes>
    </div>
    </body>
    </>
  );
}
