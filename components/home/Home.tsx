import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getFlagEmoji } from '../../common/getFlagEmoji';

const Home = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div>
        <h1>{t('Home')}</h1>

        <p>{getFlagEmoji(t("code"))}</p>

        <p>Start editing to see some magic happen :)</p>
      </div>
    </React.Fragment>
  );
};

export default Home;
