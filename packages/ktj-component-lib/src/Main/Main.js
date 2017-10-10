import React from 'react';
import styled from 'styled-brimitives';
import { View } from 'react-brimitives';

const SView = styled(View)``;

const Main = styled(props => (
  <SView accessibilityRole="main" {...props} />
))``;

export default Main;
