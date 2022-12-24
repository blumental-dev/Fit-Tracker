import { Box } from "@mui/system";
import React from "react";
import BaseCard from "../../components/card";
import withCardVariation from "../../hoc/withCardVariation";
import { TopicTypeEnum } from "../../util/appIcons";

const HocCard = withCardVariation(BaseCard);

const Topics: React.FunctionComponent<any> = () => {
  const arr = [
    TopicTypeEnum.INSIGHTS,
    TopicTypeEnum.GRAPH,
    TopicTypeEnum.NOTE,
    TopicTypeEnum.WORKOUT,
  ];

  return (
    <Box
      sx={{
        width: "-webkit-fill-available",
        zIndex: { sm: "20", md: "20", lg: "20" },
        bgcolor: "drawerBackground.main",
        borderTopRightRadius: { sm: "none", md: "none", lg: "2rem" },
        borderBottomRightRadius: { sm: "none", md: "none", lg: "2rem" },
      }}
    >
      <Box
        sx={{
          bgcolor: "topicsBackground.main",
          borderRadius: { sm: "none", md: "none", lg: "2rem" },
          padding: {
            sm: "36px 0 0 0",
            md: "none",
            lg: "2rem",
          },
          height: "auto",
          margin: { sm: "0 auto", md: "none", lg: "none" },
          display: { sm: "flex", md: "grid", lg: "grid" },
          flexDirection: { sm: "column", md: "none", lg: "none" },
          alignItems: { sm: "stretch", md: "none", lg: "none" },
          gridTemplateColumns: {
            sm: "none",
            md: "repeat(8, 1fr)",
            lg: "repeat(8, 1fr)",
            xl: "repeat(8, 1fr)",
          },
          gridTemplateRows: {
            sm: "none",
            md: "repeat(8, 1fr)",
            lg: "repeat(8, 1fr)",
            xl: "repeat(8, 1fr)",
          },
          gap: { sm: "none", md: "none", lg: "1rem" },
        }}
      >
        {arr.map((item, index) => (
          <HocCard
            key={`topic-${index + 1}`}
            topicType={item as TopicTypeEnum}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Topics;
