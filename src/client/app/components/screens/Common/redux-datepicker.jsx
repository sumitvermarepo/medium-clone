import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Label = styled.div`
  color: "red;
  font-size: 16px;
`;

const Container = styled.div`
  min-width: 200px;
`;


function ReduxDatePicker(props) {
  const { input, meta } = props;
  const {
    active, visited, touched, error,
  } = meta;

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  useEffect(() => {
    input.onChange(selectedDate.toISOString().slice(0, 11));
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
    input.onChange(date.toISOString().slice(0, 11));
  };

  return (
    <Container>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          error={((!active && (visited || touched)) && error) ? error : ''}
          margin="normal"
          id="date-picker-dialog"
          label="Select Date"
          format="MM/dd/yyyy"
          value={selectedDate}
          style={{ width: '100%' }}
          onChange={handleDateChange}
          KeyboardButtonProps={{
              'aria-label': 'change date',
          }}
        />
        <Label>{((!active && (visited || touched)) && error) ? error : ''}</Label>
      </MuiPickersUtilsProvider>
    </Container>
  );
}

ReduxDatePicker.defaultProps = {
  input: {},
  meta: {},
};

ReduxDatePicker.propTypes = {
  input: PropTypes.any,
  meta: PropTypes.any,
};

export default ReduxDatePicker;
