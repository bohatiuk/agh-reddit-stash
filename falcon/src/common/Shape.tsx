import styled from 'styled-components';

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50px;
  background-color: ${t => t.theme.colorText};
`;

export const Diamond = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${t => t.theme.colorText};
  transform: rotate(45deg);
`;
