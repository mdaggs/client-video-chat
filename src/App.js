import React from 'react';
import { TopBar, MainContainer } from './components';
import { ThemeProvider } from '@mui/material';
import theme from "./theme";
import './index.css';
import Video from './components/Video'

function App() {
  
  return (
      // <ThemeProvider theme={theme}>
      //   <TopBar />
      //   <MainContainer />
      // </ThemeProvider>
      <>
        <Video />
      </>
  );
}

export default App;
