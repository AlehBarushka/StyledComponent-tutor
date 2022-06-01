import React from 'react';
import styled from 'styled-components';
import Button from './components/Button';
import Console from './components/Console';
import Flex from './components/Flex';
import Title from './components/Title';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background-color: black;
`;

const App = () => {
  return (
    <AppWrapper>
      <Flex justify='center'>
        <Title>Console cmd.</Title>
      </Flex>
      <Flex direction='column'>
        <Console />
        <Button outlined align='flex-end'>
          Commit
        </Button>
      </Flex>
    </AppWrapper>
  );
};

export default App;
