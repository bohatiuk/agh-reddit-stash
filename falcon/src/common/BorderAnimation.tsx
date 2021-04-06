import styled from 'styled-components';

export const HoverBorder = styled.div`
  &:after {
    content: "";
    width: 0;
    height: 1px;
    margin: 1px;
    display: block;
    background-color: ${t => t.theme.colorP1};
    transition: width ${t => t.theme.transitionParams};

  }
  &:hover:after {
    width: 100%;
  }
`;
