import Card, { CardProps } from "@mui/material/Card";
import * as React from "react";
import "./index.css";

export type BaseCardProps = {
  CardHeader: React.ReactNode;
  CardContent: React.ReactNode;
  CardActions: React.ReactNode;
} & CardProps;

const BaseCard: React.FunctionComponent<BaseCardProps> = ({
  CardHeader,
  CardContent,
  CardActions,
  sx: customStyle,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "drawerBackground.main",
        blockSize: { sm: "15vh", md: "30vh", xl: "40vh" },
        borderRadius: "1rem",
        ...customStyle,
      }}
    >
      {CardHeader}
      {CardContent}
      {CardActions}
    </Card>
  );
};
export default BaseCard;
