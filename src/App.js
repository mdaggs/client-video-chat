import React from 'react';
import { TopBar, MainContainer } from './components';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
import './index.css';

function App() {
  
  return (
      <ThemeProvider theme={theme}>
        <TopBar />
        <MainContainer />
      </ThemeProvider>
  );
}

export default App;
