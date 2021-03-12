import styled from 'styled-components';
import { TTP } from '../styles/styleguide';

export const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50px;
  background-color: ${({ theme }: TTP) => theme.colorText1};
`;
