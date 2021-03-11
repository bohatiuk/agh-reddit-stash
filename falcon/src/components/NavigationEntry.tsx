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
  border-radius: ${styles.defaultRadius};
  transition: all ${styles.transitionParams};
  font: ${styles.fontN5};
  cursor: pointer;
  margin-left: ${styles.m2};

  &:hover {
    color: ${styles.colorG1};
    margin-left: ${styles.m3};
  }
`;

const Text = styled.span`
  margin-left: ${styles.m2};
`;

interface Props {
  text: string;
  icon: string;
}
export const NavigationEntry = ({ text, icon }: Props) => {
  return (
    <HoverBorder>
      <NavEntryDiv>
        <CenterDiv>
          <Icon>{icon}</Icon>
          <Text>{text}</Text>
        </CenterDiv>
      </NavEntryDiv>
    </HoverBorder>
  );
};
