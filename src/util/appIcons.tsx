import WeightIcon from "@mui/icons-material/Scale";
import ObjectiveIcon from "@mui/icons-material/Assignment";
import NoteIcon from "@mui/icons-material/Description";
import WorkoutIcon from "@mui/icons-material/FitnessCenter";

export enum TopicTypeEnum {
  WEIGHT = "Body Weight",
  OBJECTIVE = "Objectives",
  NOTE = "Notes",
  WORKOUT = "Workouts",
  INSIGHTS = "Insights",
  GRAPH = "Graph",
  SETTINGS = "Settings",
  EXERCISE_BACKLOG = "Exercise Backlog",
}

export type TopicType =
  | TopicTypeEnum.WEIGHT
  | TopicTypeEnum.OBJECTIVE
  | TopicTypeEnum.NOTE
  | TopicTypeEnum.WORKOUT
  | TopicTypeEnum.INSIGHTS
  | TopicTypeEnum.GRAPH;

const icons = {
  [TopicTypeEnum.WEIGHT]: <WeightIcon />,
  [TopicTypeEnum.OBJECTIVE]: <ObjectiveIcon />,
  [TopicTypeEnum.NOTE]: <NoteIcon />,
  [TopicTypeEnum.WORKOUT]: <WorkoutIcon />,
  [TopicTypeEnum.INSIGHTS]: <NoteIcon />,
  [TopicTypeEnum.GRAPH]: <WorkoutIcon />,
};

export const getAppIcon = (type: TopicType): React.ReactElement => icons[type];
