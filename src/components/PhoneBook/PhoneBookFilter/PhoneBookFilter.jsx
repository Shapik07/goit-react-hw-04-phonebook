import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './PhoneBookFilter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contact by name
      <Input type="text" value={value} onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
