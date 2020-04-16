import React from 'react';
import styled from 'styled-components';
import { build_time } from '../build.json';

const Container = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const BuildInfo = () => (
  <Container>Build at {build_time || new Date().toISOString()}</Container>
);
