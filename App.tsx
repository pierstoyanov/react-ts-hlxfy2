import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';

import Home from './components/home/Home';
import * as Layout from './components/layout';
import * as Msg from './components/notifications';

// i18n
import { useTranslation, Trans } from 'react-i18next';

import LanguageSelector from './components/LanguageSelector';

export default function App() {
  // i18n
  const { t } = useTranslation();

  return (
    <div>
      <header>
        <div>{<Layout.Navbar />}</div>
      </header>

      {<LanguageSelector />}
      {<Msg.CookieConsent />}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
