import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-brimitives';

import { Main, Theme } from 'ktj-component-lib';

const stories = storiesOf('Main', module);

stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>)
);

stories.add('default', () => (<Main />));
