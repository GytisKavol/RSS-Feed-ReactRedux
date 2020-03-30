import React from "react";
import { render } from "react-dom";

import mainStore from "./store";
import AppComponent from "./components/AppComponent";

const store = mainStore();

render(<AppComponent store={store} />, document.getElementById("app"));
