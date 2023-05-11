import styled from 'styled-components';
import { dimensions } from '../style/theme';

const ControlBtn = styled.button`
  float: left;
  background-color: transparent;
  border: none;
  height: ${dimensions.buttonHeight}px;
  padding: 0 0 0 1px;
  box-sizing: content-box;
  cursor: pointer;
  margin-right: 5px;
`;

export default ControlBtn;
