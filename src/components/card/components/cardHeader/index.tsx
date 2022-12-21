import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { getAppIcon, TopicType } from "../../../../util/appIcons";

type CustomCardHeaderProps = {
  topicType: TopicType;
};
const CustomCardHeader: React.FunctionComponent<CustomCardHeaderProps> = ({
  topicType,
}) => {
  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "primary.dark" }} aria-label="recipe">
          {getAppIcon(topicType)}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      titleTypographyProps={{ fontWeight: 600 }}
      title={topicType}
      subheader={`Topic`}
    />
  );
};
export default CustomCardHeader;
