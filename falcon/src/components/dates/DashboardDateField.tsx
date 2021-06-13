import React from 'react';
import styled from 'styled-components';
import { TextFieldProps as MaterialTextFieldProps } from '@material-ui/core/TextField/TextField';
import { Icon } from '@material-ui/core';
import { CenterDiv } from '../../common/CenterDiv';
import { styles } from '../../styles/styleguide';

const DateFieldDiv = styled(CenterDiv)`
  transition: all ${styles.transitionParams};
  cursor: pointer;
  border-bottom: 2px solid ${t => t.theme.colorP1};
  padding: 0 ${styles.m2};
  color: ${t => t.theme.colorP1};

  &:hover {
    color: ${t => t.theme.colorP2};
    border-color: ${t => t.theme.colorP2};
  }
`;

export type DateFieldProps = Pick<MaterialTextFieldProps, 'onClick' | 'value'> & { placeholder: string };
export function DateField(props: DateFieldProps) {
const { value, placeholder, ...filtered } = props;
if (typeof value === 'string') {
  if (value) {
    return (
      <DateFieldDiv {...filtered }>
        {placeholder}: {value}
      </DateFieldDiv>
    );
  }

  return (
    <DateFieldDiv {...filtered }>
      {placeholder}
      <Icon>expand_more</Icon>
    </DateFieldDiv>
  );
}

return <></>;
}

export type ReducerTextFieldProps = Omit<DateFieldProps, 'placeholder'>;
export function withPlaceholder(placeholder: string, Component: React.ComponentType<DateFieldProps>) {
  return (props: ReducerTextFieldProps) => (
    <Component placeholder={placeholder} {...props} />
  );
}
