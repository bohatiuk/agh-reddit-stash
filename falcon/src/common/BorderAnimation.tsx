import styled from 'styled-components';
import { TTP } from '../styles/styleguide';

export const HoverBorder = styled.div`
  &:after {
    content: "";
    width: 0;
    height: 1px;
    margin: 1px;
    display: block;
    background-color: ${({ theme }: TTP) => theme.colorP1};
    transition: width ${({ theme }: TTP) => theme.transitionParams};

  }
  &:hover:after {
    width: 100%;
  }
`;
