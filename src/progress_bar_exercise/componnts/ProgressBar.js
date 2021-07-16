import React from "react";
import {Styled} from './styled-components';

const ProgressBar = ({ percent }) => {
  return <Styled.ProgressBar percent={percent} />;
};

export default ProgressBar;