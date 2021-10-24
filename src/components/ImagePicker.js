import React, { useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Label from './Label';

const Container = styled.div``;

const HiddenInput = styled.input`
  display: none;
`;

const PrivacyDisclaimer = styled.p`
  font-size: 12px;
  margin: 10px 0 0;
  color: #b5b5b5;
  text-align: center;
`;

export default function ImagePicker(props) {
  const inputRef = useRef(null);

  const changeImage = (file) => {
    if (!file) {
      return false;
    }

    props.setImage(file);
  };

  return (
    <Container>
      {props.label && <Label>{props.label}</Label>}
      <Button onClick={() => inputRef.current.click()}>
        {props.image ? 'Choose another image' : 'Choose an image'}
      </Button>
      <HiddenInput ref={inputRef} type="file" onChange={(e) => changeImage(e.target.files[0])} />
      <PrivacyDisclaimer>
        The image will be processed in your browser and it should never be collected, or stored by me.
      </PrivacyDisclaimer>
    </Container>
  );
}
