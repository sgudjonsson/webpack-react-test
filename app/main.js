import './style.css';
import React from 'react';
import ReactDom from 'react-dom';
import AccountsOverview from './components/AccountsOverview.jsx';

const container = document.getElementById('container');
ReactDom.render(<AccountsOverview />, container);
