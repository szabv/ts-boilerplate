import * as React from 'react';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { AnyObj } from './types';

const GlobalStyle = createGlobalStyle`

html, body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

#root {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}

`

const customTheme = ((theme: AnyObj) => {
  return {
  }
});

export const App: React.FC<any> = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={customTheme}>
        <h1>Hello out there!</h1>
      </ThemeProvider>
    </>
  );
}
App.displayName = 'App'
