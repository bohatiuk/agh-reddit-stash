import { Icon } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { HoverBorder } from '../common/BorderAnimation';
import { CenterDiv } from '../common/CenterDiv';
import { styles } from '../styles/styleguide';

const NavEntryDiv = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: ${t => t.theme.defaultRadius};
  transition: all ${t => t.theme.transitionParams};
  font: ${t => t.theme.fontN5};
  cursor: pointer;
  margin-left: ${t => t.theme.m2};

  &:hover {
    color: ${t => t.theme.colorP1};
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
