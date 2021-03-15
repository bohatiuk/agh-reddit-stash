import styled from 'styled-components';
import { TTP } from '../styles/styleguide';

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${({ theme }: TTP) => theme.color8};
`;

export const Diamond = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${({ theme }: TTP) => theme.color8};
  transform: rotate(45deg);
`;
