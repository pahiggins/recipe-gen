import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  margin: 3rem 3rem 0 3rem;
  padding: 1.5rem;
  width: 60rem;
  background-color: #f5f5f5;
  color: #333;
`;

export default Div;