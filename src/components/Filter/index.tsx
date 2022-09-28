import React, { FormEventHandler, useState } from 'react';
import { FilterStyled } from './styles';

interface FilterInputProps {
  handleTextType: React.FormEventHandler;
  placeholder?: string;
}

function FilterInput({ handleTextType, ...rest }: FilterInputProps) {
  return (
    <FilterStyled onInput={handleTextType} {...rest} />
  );
}

export default FilterInput;