import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
type DeviceQueryReturn = {
  isMobile: boolean;
  prefersDarkMode: boolean;
};

export const useDeviceQuery = (): DeviceQueryReturn => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return { isMobile, prefersDarkMode };
};
