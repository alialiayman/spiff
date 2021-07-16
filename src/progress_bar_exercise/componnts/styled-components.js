import styled from "styled-components";

const ProgressBar = styled.div`
  height: 6px;
  background: linear-gradient(90deg, #ff9800, #f44336);
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ percent }) => `${percent}%`};
`;

export const Styled = { ProgressBar };
