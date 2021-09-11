require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDom from 'react-dom';
import './App.scss';

import { App } from './App';

const appElement = document.getElementById('root');

ReactDom.render(<App />, appElement);
