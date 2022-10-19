import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  background-color: ${props => props.bgColor};
  border: 4px solid ${props => props.borderColor};
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;
