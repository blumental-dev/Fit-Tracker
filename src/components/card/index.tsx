import Card from "@mui/material/Card";
import * as React from "react";
import { TopicType } from "../../util/appIcons";
import CustomCardActions from "./components/cardActions";
import CustomCardContent from "./components/cardContent";
import CustomCardHeader from "./components/cardHeader";
import "./index.css";

export type CustomCardProps = {
  topicType: TopicType;
  children: React.ReactNode;
};

const BaseCard: React.FunctionComponent<CustomCardProps> = ({
  topicType,
  children,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "drawerBackground.main",
        blockSize: { sm: "15vh", md: "30vh", xl: "40vh" },
        borderRadius: "1rem",
      }}
    >
      <CustomCardHeader topicType={topicType} />
      <CustomCardContent />
      <CustomCardActions>{children}</CustomCardActions>
    </Card>
  );
};
export default BaseCard;
