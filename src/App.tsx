import React from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App: React.FC = (): JSX.Element => {
  return (
    <AppContainer className="App">
      <Header />
      <Todos />
      <Footer />
    </AppContainer>
  );
}

export default App;
