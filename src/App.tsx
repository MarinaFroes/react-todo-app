import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <AppContainer className="App">
      <Header title="Todo app"/>
      <Todos />
      <Footer />
    </AppContainer>
  );
}

export default App;
