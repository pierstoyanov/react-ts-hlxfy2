import * as React from 'react';
import { useTranslation } from "react-i18next";
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const About = () => {
    const { t } = useTranslation();
    return (
        <p>{t["about"]}
        {<LoadingScreen />}
        </p>
    );
};

export default About;
