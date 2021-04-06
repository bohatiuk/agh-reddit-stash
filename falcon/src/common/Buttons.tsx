import styled from 'styled-components';
import { styles } from '../styles/styleguide';
import { CenterDiv } from './CenterDiv';

export const CallToActionBtn = styled(CenterDiv)`
  width: 240px;
  height: 50px;
  cursor: pointer;
  font: ${styles.fontN4};
  color: ${t => t.theme.colorText};
  background-color: ${t => `rgba(${t.theme.colorP1RGB}, 0.7)`};
  transition: all ${styles.transitionParams};
  &:hover {
    background-color: ${t => t.theme.colorP1};
    color: ${t => t.theme.colorTextN};

  }
`;

export const CallToActionOutlinedBtn = styled(CallToActionBtn)`
  background: transparent;
  border: 1px solid ${t => `rgba(${t.theme.colorP1RGB}, 0.7)`};
`;
