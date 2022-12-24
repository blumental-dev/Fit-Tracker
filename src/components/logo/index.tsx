import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

type LogoProps = {
  isMobile: boolean;
};

const Logo: React.FunctionComponent<LogoProps> = ({ isMobile }) => {
  if (isMobile) return <></>;
  else
    return (
      <Box
        sx={{
          position: "relative",
          top: 0,
          height: "fit-content",
          flexGrow: 1,
          display: { xs: "flex", md: "flex", alignItems: "center" },
        }}
      >
        <FitnessCenterIcon
          sx={{
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            color: "primary.dark",
            padding: ".2rem",
            display: { xs: "flex", md: "flex" },
            mr: 1,
          }}
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 1,
            display: { xs: "flex", md: "flex" },
            fontFamily: "monospace",
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          LOGO
        </Typography>
      </Box>
    );
};
export default Logo;
