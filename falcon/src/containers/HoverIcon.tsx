import { Icon } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';
import { TTP } from '../styles/styleguide';

const Hover = styled.div`
  transition: color ${({ theme }: TTP) => theme.transitionParams};
  cursor: pointer;
  &:hover {
    color: ${({ theme }: TTP) => theme.colorG1};
  }
`;
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: string;
  size?: 'large' | 'small';
}
function HoverIcon({ icon, size, ...rest }: Props) {
  return (
    <Hover {...rest}>
      <Icon fontSize={size}>{icon}</Icon>
    </Hover>
  );
}

export default HoverIcon;
