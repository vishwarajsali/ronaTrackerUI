import React from 'react'; 
import { createGlobalStyle } from 'styled-components';
 
import Stats from './components/Stats'; 
import CountrySelector from './components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <GlobalStyle />
      <Stats url="https://rona-tracker-api.herokuapp.com/api/v1/getGlobal"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}