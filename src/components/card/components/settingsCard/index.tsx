import { CardProps } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import { BaseCardProps } from "../..";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import { TopicTypeEnum } from "../../../../util/appIcons";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const SettingsHeader = (): JSX.Element => (
  <CardHeader
    action={
      <IconButton aria-label="settings">
        <MoreVertIcon />
      </IconButton>
    }
    titleTypographyProps={{ fontWeight: 600 }}
    title={TopicTypeEnum.SETTINGS}
  />
);
const SettingsContent = (): JSX.Element => (
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the
      mussels, if you like.
    </Typography>
  </CardContent>
);
const SettingsActions = (): JSX.Element => <></>;

export default function getSettingsCard(): BaseCardProps & CardProps {
  return {
    CardHeader: <SettingsHeader />,
    CardContent: <SettingsContent />,
    CardActions: <SettingsActions />,
    sx: {
      backgroundColor: "backdrop.main",
      gridArea: "1 / 1 / 9 / 9",
    },
  };
}
