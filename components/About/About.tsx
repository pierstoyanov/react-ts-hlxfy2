import * as React from 'react';
import { useTranslation } from "react-i18next";
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const About = () => {
    const { t } = useTranslation();
    return (
        <>{t["about"]}
        {<LoadingScreen />}

        
        </>
    );
};

export default About;
