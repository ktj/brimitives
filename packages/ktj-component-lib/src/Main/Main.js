import React from 'react';
import styled from 'styled-components/primitives';

const View = styled.View``;

const Main = styled(props => (
  <View accessibilityRole="main" {...props} />
))``;

export default Main;
