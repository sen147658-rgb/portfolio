import "./style.css";

import "./css/variables.css";
import "./css/global.css";
import "./css/animations.css";
import "./css/components.css";
import "./css/responsive.css";

import { App, initializeApp } from "./js/app.js";
import { initNavigation } from "./js/navigation.js";

document.querySelector("#app").innerHTML = App();

/*
 * Initialize navigation immediately so
 * the navbar and mobile menu work.
 */
initNavigation();

/*
 * Start loader and page initialization.
 */
initializeApp();