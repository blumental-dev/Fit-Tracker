import AddIcon from "@mui/icons-material/AddBox";
import { CardProps } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import { BaseCardProps } from "../..";
import BacklogHeader from "./components/Header";

const ExercisesBacklogHeader = (): JSX.Element => (
  <CardHeader
    action={
      <IconButton aria-label="exercises">
        <AddIcon />
      </IconButton>
    }
    title={<BacklogHeader />}
    sx={{ marginLeft: "2rem" }}
  />
);
const ExercisesBacklogContent = (): JSX.Element => (
  <CardContent sx={{ overflowY: "scroll", color: "background.default" }}>
    <Outlet />
  </CardContent>
);
const ExercisesBacklogActions = (): JSX.Element => <></>;

export default function getExercisesBacklogCard(): BaseCardProps {
  return {
    CardHeader: <ExercisesBacklogHeader />,
    CardContent: <ExercisesBacklogContent />,
    CardActions: <ExercisesBacklogActions />,
    sx: {
      backgroundColor: "primary.dark",
      color: "background.default",
      gridArea: "1 / 1 / 9 / 9",
    },
  };
}
