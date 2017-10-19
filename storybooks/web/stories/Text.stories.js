import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-brimitives';

import { Main, Text, Theme } from 'ktj-component-lib';

const stories = storiesOf('Text', module);

stories.addDecorator(getStory => (
  <ThemeProvider theme={Theme}>
    {getStory()}
  </ThemeProvider>)
);

stories.add('default', () => (<Main><Text>Foobar</Text></Main>));
