import styled from 'styled-components';

const Button = styled.button`
  border-radius: 0;
  height: 3.5rem;
  width: 18rem;
  background-color: rgba(62, 44, 198, 1);
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  transition: color .2s;

  :hover {
    background-color: rgba(62, 44, 198, .9);
  }
`;

export default Button;