import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Main, Text } from 'hsl-shared-components';

import ScrollView from './ScrollView';

storiesOf('Main', module)
  .addDecorator(getStory => (
        <ScrollView>{getStory()}</ScrollView>
  .add('Default', () => {
    return (<Main>
      <Text>Foobar</Text>
    </Main>);
  });
