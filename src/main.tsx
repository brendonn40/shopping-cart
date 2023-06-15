/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider,createEmotionCache } from '@mantine/core';
import RouteSwitch from './RouteSwitch';

const myCache = createEmotionCache({
  key: 'mantine',
  prepend: false
});
ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider emotionCache={myCache}>
    <RouteSwitch/>
  </MantineProvider>
);
