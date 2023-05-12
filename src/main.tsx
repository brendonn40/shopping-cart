/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import RouteSwitch from './RouteSwitch';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <RouteSwitch/>
  </MantineProvider>
);
