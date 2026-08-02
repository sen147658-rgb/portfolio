import "./style.css";

import "./css/variables.css";
import "./css/global.css";
import "./css/animations.css";
import "./css/components.css";
import "./css/responsive.css";

import { App, initializeApp } from "./js/app.js";

document.querySelector("#app").innerHTML = App();

initializeApp();