import { Icon } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import { styles, TTP } from '../../styles/styleguide';
import { ReactSVG } from 'react-svg';
import { CenterDiv } from '../../common/CenterDiv';

const Container = styled(CenterDiv)`
  width: 360px;
  height: 480px;
  font-size: 72px;
  background-color: ${({ theme }: TTP) => theme.color8};
  padding: ${styles.m5};
  // border-radius: 45px;

  & svg {
    fill: ${({ theme }: TTP) => theme.color0};
  }

  -webkit-box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.6);
  -moz-box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.6);
  box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.color8RGB},0.6);
`;

function HoverIcon() {
  return (
    <Container>
      <ReactSVG src='twitter.svg' />
    </Container>
  );
}

export default HoverIcon;
