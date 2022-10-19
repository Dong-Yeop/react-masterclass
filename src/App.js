import styled, { keyframes } from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${props => props.bgColor};
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
  height: 24px;
  width: 60px;
`;
const Input = styled.input.attrs({ reqyired: true, maxLength: 10 })`
  background-color: tomato;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const BoxAni = styled.div`
  height: 200px;
  width: 200px;
  background: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1.2s linear infinite;
  ${Emoji}:hover {
    font-size: 98px;
  }
`;
const BoxTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
  width: 400px;
  height: 400px;
`;
const TextTheme = styled.h1`
  color: ${props => props.theme.textColor};
`;

function App() {
  return (
    <div>
      <Father>
        <Box bgColor="teal">
          <Text>Hello</Text>
        </Box>
        <Box bgColor="tomato" />
        <Circle bgColor="orange" />
        <Btn>Login</Btn>
        <Btn as="a" href="/">
          Login
        </Btn>
      </Father>
      <Father>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </Father>
      <Father>
        <BoxAni>
          <Emoji>😜</Emoji>
        </BoxAni>
      </Father>
      <BoxTheme>
        <TextTheme>Hello Theme</TextTheme>
      </BoxTheme>
    </div>
  );
}

export default App;
