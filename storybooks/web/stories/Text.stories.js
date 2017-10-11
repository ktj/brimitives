import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main, Text } from 'ktj-component-lib';

const stories = storiesOf('Text', module);

stories.add('default', () => (<Main><Text>Foobar</Text></Main>));
