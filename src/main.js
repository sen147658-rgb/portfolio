import './style.css';

import './css/variables.css';
import './css/global.css';
import './css/animations.css';
import './css/components.css';
import './css/responsive.css';

import { App } from './js/app.js';
import { initNavigation } from './js/navigation.js';

document.querySelector('#app').innerHTML = App();

initNavigation();