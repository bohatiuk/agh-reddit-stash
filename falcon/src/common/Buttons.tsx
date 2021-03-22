import styled from 'styled-components';
import { styles, TTP } from '../styles/styleguide';
import { CenterDiv } from './CenterDiv';

export const CallToActionBtn = styled(CenterDiv)`
  width: 240px;
  height: 50px;
  cursor: pointer;
  font: ${styles.fontN4};
  color: ${({ theme }: TTP) => theme.colorText};
  background-color: ${({ theme }: TTP) => `rgba(${theme.colorP1RGB}, 0.7)`};
  transition: all ${styles.transitionParams};
  &:hover {
    background-color: ${({ theme }: TTP) => theme.colorP1};
    color: ${({ theme }: TTP) => theme.colorTextN};

  }
`;

export const CallToActionOutlinedBtn = styled(CallToActionBtn)`
  background: transparent;
  border: 1px solid ${({ theme }: TTP) => `rgba(${theme.colorP1RGB}, 0.7)`};
`;
