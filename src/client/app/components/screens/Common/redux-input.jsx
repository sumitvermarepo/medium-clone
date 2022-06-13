import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextFieldDiv = styled(TextField)`
  margin-top: 12px;
`;

const ReduxPrimaryInput = ({
  input,
  label,
  errResp,
  type,
  InputProps,
  meta: {
    active, visited, touched, error,
  },
  ...custom
}) => (
  <TextFieldDiv
    label={
        (!active && (visited || touched) && error) || !!errResp
          ? error || errResp
          : label
      }
    error={
        (!active && (visited || touched) && error) || !!errResp
          ? error || errResp
          : null
      }
    fullWidth
    type={type}
    InputProps={InputProps}
    {...input}
    {...custom}
  />
);

ReduxPrimaryInput.defaultProps = {
  input: {},
  meta: {},
  label: 'label',
  errResp: '',
  type: 'text',
  InputProps: '',
};

ReduxPrimaryInput.propTypes = {
  input: PropTypes.any,
  meta: PropTypes.any,
  label: PropTypes.string,
  errResp: PropTypes.string,
  InputProps: PropTypes.string,
  type: PropTypes.string,
};

export default ReduxPrimaryInput;
