import * as React from "react";

import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import configureStore from "./store/configureStore";
import router from "./routers/AppRouter";
import Main from "./components/Main";

const store = configureStore();

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router}>
            <Main></Main>
          </RouterProvider>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
