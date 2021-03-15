import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { HoverBorder } from '../common/BorderAnimation';
import { CenterDiv } from '../common/CenterDiv';
import { styles, TTP } from '../styles/styleguide';

const NavEntryDiv = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: ${({ theme }: TTP) => theme.defaultRadius};
  transition: all ${({ theme }: TTP) => theme.transitionParams};
  font: ${({ theme }: TTP) => theme.fontN5};
  cursor: pointer;
  margin-left: ${({ theme }: TTP) => theme.m2};

  &:hover {
    color: ${({ theme }: TTP) => theme.color4};
    margin-left: ${styles.m3};
  }
`;

const Text = styled.span`
  margin-left: ${styles.m2};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon: string;
}
function NavigationEntry({ text, icon, ...rest }: Props) {
  return (
    <HoverBorder>
      <NavEntryDiv {...rest}>
        <CenterDiv>
          <Icon>{icon}</Icon>
          <Text>{text}</Text>
        </CenterDiv>
      </NavEntryDiv>
    </HoverBorder>
  );
}

export default NavigationEntry;
