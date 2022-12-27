import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CardMedia, CardProps } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { BaseCardProps } from "../..";
import { TopicTypeEnum } from "../../../../util/appIcons";
import AreaChart from "../../../AreaChart";

const GraphHeader = (): JSX.Element => (
  <CardHeader
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    titleTypographyProps={{ fontWeight: 600 }}
    subheaderTypographyProps={{ color: "background.default" }}
    // title={TopicTypeEnum.INSIGHTS}
    subheader={`Topic`}
  />
);
const GraphContent = (): JSX.Element => (
  <CardContent sx={{ color: "background.default" }}>
    <AreaChart />
    <Typography variant="body2">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like.
    </Typography>
  </CardContent>
);
const GraphActions = (): JSX.Element => <></>;

export default function getGraphCard(): BaseCardProps & CardProps {
  return {
    CardHeader: <GraphHeader />,
    CardContent: <GraphContent />,
    CardActions: <GraphActions />,
    sx: {
      backgroundColor: "#95CFD9",
      color: "background.default",
      gridArea: "1 / 3 / 9 / 9",
    },
  };
}
