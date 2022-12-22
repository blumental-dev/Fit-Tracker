import { Backdrop } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { DrawerProvider } from "./context/drawerContext";
import HomePage from "./layouts/homePage";
import useGlobalTheme from "./theme/global";
import { useDeviceQuery } from "./util/breakpoints";

function App() {
  const [theme] = useGlobalTheme();
  const { isMobile } = useDeviceQuery();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <DrawerProvider>
          <CssBaseline />
          {!isMobile && (
            <Backdrop
              sx={{
                backgroundColor: "backdrop.main",
                filter: "blur(10px)",
              }}
              open={true}
            />
          )}
          <HomePage />
        </DrawerProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
