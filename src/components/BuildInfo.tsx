import React from 'react';
import styled from 'styled-components';

const buildTime = process.env.BUILD_TIME;

const Container = styled.h6`
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
`;

export const BuildInfo = () => <Container>Build: {buildTime}</Container>;
