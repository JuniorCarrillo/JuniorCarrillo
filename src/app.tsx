import React from 'react';
import {Provider} from "react-redux";
import "moment/locale/es"

import "./translations";
import "./infrastructure/react2tron";

import reduxSlices from "./infrastructure/redux-store";

import HomePage from "./pages/home-page";


export default function App() {
  return (
    <Provider store={reduxSlices}>
      <HomePage />
    </Provider>
  );
}
