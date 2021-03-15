import styled from 'styled-components';
import { styles, TTP } from '../styles/styleguide';
import { CenterDiv } from './CenterDiv';

export const CallToActionBtn = styled(CenterDiv)`
  width: 240px;
  height: 50px;
  cursor: pointer;
  font: ${styles.fontN4};
  color: ${({ theme }: TTP) => theme.color8};
  background-color: ${({ theme }: TTP) => theme.color4};
  transition: all ${styles.transitionParams};
  &:hover {
    background-color: ${({ theme }: TTP) => theme.color6};
    color: ${({ theme }: TTP) => theme.color0};

  }
`;

export const CallToActionOutlinedBtn = styled(CallToActionBtn)`
  background: transparent;
  border: 1px solid ${({ theme }: TTP) => theme.color4};
`;
