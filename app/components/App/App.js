import React from "react";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { disableYellowBox } from "react-native";
import configureStore from "../../redux/configureStore";
import { THEME } from "../../config";
import AppRouter from "./AppRouter";

console.disableYellowBox = true;

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={THEME}>
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

export default App;
