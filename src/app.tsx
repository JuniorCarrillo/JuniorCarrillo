import React from 'react';
import {Provider} from "react-redux";
import "moment/locale/es"

// Redux
import reduxSlices from "./infrastructure/redux-store";

// Pages
import HomePage from "./pages/home-page";

export default function App() {
  return (
    <Provider store={reduxSlices}>
      <HomePage />
    </Provider>
  );
}
