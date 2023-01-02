import AddIcon from "@mui/icons-material/AddBox";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";

const ExerciseCard: FunctionComponent<any> = (): JSX.Element => (
  <>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="exercises">
          <AddIcon />
        </IconButton>
      }
      titleTypographyProps={{ fontWeight: 600, color: "text.primary" }}
      subheaderTypographyProps={{ color: "background.default" }}
      title={"All Exercises"}
    />
    <CardContent sx={{ color: "background.default" }}>
      <Typography variant="body2">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  </>
);

export default ExerciseCard;
