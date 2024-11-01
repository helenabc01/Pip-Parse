import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PandaPip } from './players/panda-pip';
import { RaccoonParse } from './players/raccoon-parse';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PandaPip/>
    <RaccoonParse/>
  </React.StrictMode>
);
