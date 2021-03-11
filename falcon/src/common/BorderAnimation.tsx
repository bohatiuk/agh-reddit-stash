import styled from 'styled-components';
import { styles } from '../styles/styleguide';

export const HoverBorder = styled.div`
  &:after {
    content: "";
    width: 0;
    height: 1px;
    margin: 1px;
    display: block;
    background-color: ${styles.colorG1};
    transition: width ${styles.transitionParams};

  }
  &:hover:after {
    width: 100%;
  }
`;
