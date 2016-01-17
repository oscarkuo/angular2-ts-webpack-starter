import "./depend";

import {bootstrap}    from "angular2/platform/browser";
import {AppComponent} from "./app.component";

// need to use a DOMContentLoaded event listener to bootstrap
// our application since we are not using System.js loader
document.addEventListener("DOMContentLoaded", function () {
  bootstrap(AppComponent);
});
