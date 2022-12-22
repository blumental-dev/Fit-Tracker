import { Box } from "@mui/system";
import React from "react";
import CustomCard from "../../components/card";
import LineChart from "../../components/LineChart";
import { TopicTypeEnum } from "../../util/appIcons";

const Topics: React.FunctionComponent<any> = () => {
  const arr = [
    TopicTypeEnum.WEIGHT,
    TopicTypeEnum.OBJECTIVE,
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
          bgcolor: "background.paper",
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
            md: "repeat(auto-fill, minmax(20vw, 1fr))",
            lg: "repeat(auto-fill, minmax(25vw, 1fr))",
            xl: "repeat(auto-fill, minmax(30vw, 1fr))",
          },
          gridAutoRows: {
            sm: "none",
            md: "min-content",
            lg: "min-content",
            xl: "min-content",
          },
          gridAutoFlow: { sm: "none", md: "dense", lg: "dense" },
          gap: { sm: "none", md: "none", lg: "1rem" },
        }}
      >
        {arr.map((item, index) => (
          <CustomCard
            key={`topic-${index + 1}`}
            topicType={item as TopicTypeEnum}
          >
            <LineChart />
          </CustomCard>
        ))}
      </Box>
    </Box>
  );
};

export default Topics;
