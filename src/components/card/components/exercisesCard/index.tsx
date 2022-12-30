import AddIcon from "@mui/icons-material/AddBox";
import { CardProps } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BaseCardProps } from "../..";
import DataTable from "../../../DataTable";

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
    // subheader={`Topic`}
  />
);
const ExercisesContent = (): JSX.Element => (
  <CardContent sx={{ color: "background.default" }}>
    {/* <AreaChart /> */}
    <DataTable />
    <Typography variant="body2">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like.
    </Typography>
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
