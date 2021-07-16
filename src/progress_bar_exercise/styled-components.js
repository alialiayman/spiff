import styled from "styled-components";

const Button = styled.button`
  border-radius: 32px;
  text-transform: uppercase;
  padding: 1rem 1.5rem;
  font-weight: 500;

  ${({ color }) => `
      color: ${color ? color : "#2ebb9c"};
      border: 1px solid ${color ? color : "#2ebb9c"};
  `}

  :hover {
    border-width: 2px;
  }

  :focus {
    border-width: 3px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  width: 100%;
`;
export const Styled = { Button, Container };
