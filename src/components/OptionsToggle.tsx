import React from 'react';
import styled from 'styled-components';

import Label from './Label';

const Container = styled.div`
  margin: 0;
`;

const Options = styled.div`
  display: flex;
`;

const Option = styled.button<{ selected: boolean }>`
  display: flex;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 10px 0 0;
  transition: 0.5s all linear;
  background: transparent;
  border: 1px solid #3f3f3f;
  color: #b5b5b5;
  text-transform: uppercase;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }

  ${(props) => props.selected && `background: rgba(255, 255, 255, 0.1);`}
`;

interface OptionsToggleProps {
  label?: string;
  options: Array<{
    value: string;
    label: string | React.ReactElement;
  }>;
  defaultValue: string;
  onChange: (value: string) => void;
}

export default function OptionsToggle(props: OptionsToggleProps): React.ReactElement {
  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <Options>
        {props.options.map((option, index) => (
          <Option
            selected={option.value === props.defaultValue}
            onClick={() => props.onChange(option.value)}
            key={index}
          >
            {option.label}
          </Option>
        ))}
      </Options>
    </Container>
  );
}