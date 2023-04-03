import { Box, Button, IconButton, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { getFlagEmoji } from '../common/getFlagEmoji';
import sleep from '../common/sleep';

import i18n from '../i18n';

const LanguageSelector = (): JSX.Element => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.

  const chooseLanguage = async (e) => {
    e.preventDefault();
    await sleep(2000)
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
    <Box sx = {{
      display: {xs: "none", md: "flex" }
    }}>
      <IconButton value="bg" onClick={chooseLanguage}>
        {getFlagEmoji("BG")}
      </IconButton>

      <IconButton value="en" onClick={chooseLanguage}>
        {getFlagEmoji("EU")}
      </IconButton>
    </Box>

    <Box sx = {{
      display: {xs: "flex", md: "none" }
    }}>
      <Select value={selectedLanguage} onChange={chooseLanguage}>
        <MenuItem value="bg">BG</MenuItem>
        <MenuItem value="en">EN</MenuItem>
      </Select>
    </Box>

    </>
  );
};

export default LanguageSelector;
