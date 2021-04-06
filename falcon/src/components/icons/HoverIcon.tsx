import { Icon } from '@material-ui/core';
import styled from 'styled-components';
import React from 'react';

const Hover = styled.div`
  transition: color ${t => t.theme.transitionParams};
  cursor: pointer;
  color: ${t => `rgba(${t.theme.colorP1RGB}, 0.7)`};
  &:hover {
    color: ${t => t.theme.colorP1};
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
