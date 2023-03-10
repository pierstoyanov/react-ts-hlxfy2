import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>
        <h1>{t('Home')}</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
    </React.Fragment>
  );
};

export default Home;
