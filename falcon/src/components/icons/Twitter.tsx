import { Icon } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import { styles, TTP } from '../../styles/styleguide';
import { ReactSVG } from 'react-svg';
import { CenterDiv } from '../../common/CenterDiv';

const Container = styled(CenterDiv)`
  width: 480px;
  height: 480px;
  font-size: 72px;
  background-color: ${({ theme }: TTP) => theme.colorG5};
  padding: ${styles.m5};
  border-radius: 45px;

  & svg {
    fill: ${({ theme }: TTP) => theme.colorText1};
  }

  -webkit-box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.colorText1RGB},0.6);
  -moz-box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.colorText1RGB},0.6);
  box-shadow: 10px 10px 20px 0px rgba(${({ theme }: TTP) => theme.colorText1RGB},0.6);
`;

function HoverIcon() {
  return (
    <Container>
      <ReactSVG src='twitter.svg' />
    </Container>
  );
}

export default HoverIcon;
