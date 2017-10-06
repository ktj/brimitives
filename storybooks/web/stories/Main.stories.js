import React from 'react';
import { storiesOf } from '@storybook/react';

import { Main } from 'ktj-component-lib';

const stories = storiesOf('Main', module);

stories.add('default', () => (<Main />));
