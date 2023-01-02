import AddIcon from "@mui/icons-material/AddBox";
import { CardProps } from "@mui/material";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { BaseCardProps } from "../..";
import ExerciseCard from "./components/exerciseCard";

const ExercisesHeader = (): JSX.Element => (
  <CardHeader
    action={
      <IconButton aria-label="exercises">
        <AddIcon />
      </IconButton>
    }
    titleTypographyProps={{ fontWeight: 600, color: "text.primary" }}
    subheaderTypographyProps={{ color: "background.default" }}
    title={"All Exercises"}
  />
);
const ExercisesContent = (): JSX.Element => (
  <CardContent sx={{ overflowY: "scroll", color: "background.default" }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[1, 2, 3].map(() => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map(() => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <ExerciseCard />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  </CardContent>
);
const ExercisesActions = (): JSX.Element => <></>;

export default function getExercisesCard(): BaseCardProps & CardProps {
  return {
    CardHeader: <ExercisesHeader />,
    CardContent: <ExercisesContent />,
    CardActions: <ExercisesActions />,
    sx: {
      backgroundColor: "primary.dark",
      color: "background.default",
      gridArea: "1 / 1 / 9 / 9",
    },
  };
}
