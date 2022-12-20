import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { DrawerProvider } from "./context/drawerContext";
import HomePage from "./layouts/homePage";
import useGlobalTheme from "./theme/global";

function App() {
  const [theme] = useGlobalTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DrawerProvider>
          <CssBaseline />
          <div className="App">
            <HomePage />
          </div>
        </DrawerProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
