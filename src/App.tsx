import React from 'react';
import styled from 'styled-components';
import FormEvent from './FormEvent';

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <FormEvent />
      <Container>
        <H1>protected</H1>
      </Container>
    </div>
  );
}

export default App;
