import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { theme } from '../utils/theme';
import { initTranslation } from '../services/translation/i18n';

const App = () => {
  initTranslation();

  return (
    <ThemeProvider theme={theme}>
      <div>coucou</div>
    </ThemeProvider>
  );
};

App.propTypes = {};

export default App;
