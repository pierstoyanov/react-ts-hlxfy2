import * as React from 'react';
import { useState } from 'react';

import i18n from '../i18n';

const LanguageSelector = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <select defaultValue={selectedLanguage} onChange={chooseLanguage}>
      <option value="bg">&#127463</option>
      <option value="en">English</option>
    </select>
  );
};

export default LanguageSelector;
