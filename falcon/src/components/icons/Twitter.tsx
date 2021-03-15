import styled from 'styled-components';
import React from 'react';
import { TTP } from '../../styles/styleguide';
import { ReactSVG } from 'react-svg';
import { CenterDiv } from '../../common/CenterDiv';

const Container = styled(CenterDiv)`
  width: 360px;
  font-size: 72px;

  & svg {
    fill: ${({ theme }: TTP) => theme.color0};
  }
`;

function HoverIcon() {
  return (
    <Container>
      <ReactSVG src='twitter.svg' />
    </Container>
  );
}

export default HoverIcon;
