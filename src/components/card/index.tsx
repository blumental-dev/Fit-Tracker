import Card, { CardProps } from "@mui/material/Card";
import * as React from "react";
import "./index.css";

export type BaseCardProps = {
  CardHeader: React.ReactNode;
  CardContent: React.ReactNode;
  CardActions: React.ReactNode;
} & Pick<CardProps, "sx">;

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
        overflow: "auto",
        borderRadius: "2rem",
        maxHeight: "90vh",
        maxWidth: "78vw",
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
