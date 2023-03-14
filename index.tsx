import * as React from 'react';
import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import i18n from './i18n';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

import LoadingScreen from './components/LoadingScreen/LoadingScreen';

root.render(
  <BrowserRouter>
    <Suspense fallback={<LoadingScreen />}>
      <App />
    </Suspense>
  </BrowserRouter>
);
