import React from 'react';
import DateMomentUtils from '@date-io/moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { ReducerTextFieldProps as DashboardDateFieldProps } from './DashboardDateField';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface Props {
  textComponent: React.ComponentType<DashboardDateFieldProps>;
  onChange(date: MaterialUiPickersDate): void;
  value: MaterialUiPickersDate;
}
function DashboardDatePicker({ textComponent, onChange, value }: Props) {
  return (
    <MuiPickersUtilsProvider utils={DateMomentUtils}>
      <DatePicker
        value={value}
        onChange={onChange}
        disableFuture
        variant='dialog'
        TextFieldComponent={textComponent}
        format='Do [of] MMMM YYYY'
      />
    </MuiPickersUtilsProvider>
  );
}

export default DashboardDatePicker;
