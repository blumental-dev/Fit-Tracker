import WeightIcon from "@mui/icons-material/Scale";
import ObjectiveIcon from "@mui/icons-material/Assignment";
import NoteIcon from "@mui/icons-material/Description";
import WorkoutIcon from "@mui/icons-material/FitnessCenter";

export type TopicType = "Weight" | "Objective" | "Note" | "Workout";

const icons = {
  ["Weight"]: <WeightIcon />,
  ["Objective"]: <ObjectiveIcon />,
  ["Note"]: <NoteIcon />,
  ["Workout"]: <WorkoutIcon />,
};

export const getAppIcon = (type: TopicType): React.ReactElement => icons[type];
