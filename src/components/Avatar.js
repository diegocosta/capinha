import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
  background: #060707;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 3px;
  font-family: Arial, sans-serif;
  text-decoration: none;

  position: fixed;
  top: 20px;
  right: 40px;

  width: 148px;

  :hover {
    background: #1e1e1e;
  }
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 10px;
`;

const Label = styled.span`
  color: #fff;
  font-size: 13px;
`;

const Icon = styled.span`
  color: #fff;
  font-size: 10px;
  margin-left: 6px;
`;

export default function Avatar() {
  return (
    <Container href="https://diegocosta.me">
      <Image src="https://avatars.githubusercontent.com/u/3134422?v=4" />
      <Label>diegocosta.me</Label>
      <Icon>▼</Icon>
    </Container>
  );
}
