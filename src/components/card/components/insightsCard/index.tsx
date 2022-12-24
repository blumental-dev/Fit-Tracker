import { CardProps } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import CardHeader from "@mui/material/CardHeader";
import { BaseCardProps } from "../..";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import {
  getAppIcon,
  TopicType,
  TopicTypeEnum,
} from "../../../../util/appIcons";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const InsightsHeader = (): JSX.Element => (
  <CardHeader
    // avatar={
    //   <Avatar sx={{ bgcolor: "primary.dark" }} aria-label="recipe">
    //     {getAppIcon(topicType)}
    //   </Avatar>
    // }
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    titleTypographyProps={{ fontWeight: 600 }}
    title={TopicTypeEnum.INSIGHTS}
    // subheader={`Topic`}
  />
);
const InsightsContent = (): JSX.Element => (
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like.
    </Typography>
  </CardContent>
);
const InsightsActions = (): JSX.Element => <></>;

export default function getInsightsCard(): BaseCardProps & CardProps {
  return {
    CardHeader: <InsightsHeader />,
    CardContent: <InsightsContent />,
    CardActions: <InsightsActions />,
    sx: {
      backgroundColor: "backdrop.main",
      blockSize: { sm: "5vh", md: "10vh", xl: "80vh" },
      gridArea: "1 / 1 / 9 / 3",
    },
  };
}
