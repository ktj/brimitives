import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => {
  loadStories()
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: 'localhost' });
AppRegistry.registerComponent('nativestorybook', () => StorybookUI);
export default StorybookUI;