import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './styles/animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'lightbox2/dist/css/lightbox.min.css'
import './styles/style.css';

import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './libs/easing.js';
import 'lightbox2/dist/js/lightbox.min.js';
import { PortfolioApp } from './portfolioApp';


ReactDOM.render(
    <PortfolioApp />,
    document.getElementById('root'));
