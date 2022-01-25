import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { grey } from '@mui/material/colors';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Boja pozadine,
      main: grey[200],
    },
  },
  typography: {
    fontFamily: ['Cardo', 'Open Sans'].join(','),
    typography: {
      h1: {
        fontFamily: 'Arial, Open Sans',
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
