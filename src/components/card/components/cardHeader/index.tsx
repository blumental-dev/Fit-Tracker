import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { getAppIcon, TopicType } from "../../../../util/appIcons";

type CustomCardHeaderProps = {
  topicType: TopicType;
} & Pick<CardHeaderProps, "avatar" | "action" | "title" | "subheader" | "sx">;
const CustomCardHeader: React.FunctionComponent<CustomCardHeaderProps> = ({
  topicType,
  ...rest
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
      title={topicType}
      subheader={`Topic`}
    />
  );
};
export default CustomCardHeader;
