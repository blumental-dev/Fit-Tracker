import { Box } from "@mui/system";
import React from "react";
import BaseCard from "../../components/card";
import withCardVariation from "../../hoc/withCardVariation";
import { TopicTypeEnum } from "../../util/appIcons";

const HocCard = withCardVariation(BaseCard);

const Topics: React.FunctionComponent<any> = () => {
  const arr = [TopicTypeEnum.INSIGHTS, TopicTypeEnum.GRAPH];

  return (
    <>
      {arr.map((item, index) => (
        <HocCard key={`topic-${index + 1}`} topicType={item as TopicTypeEnum} />
      ))}
    </>
  );
};

export default Topics;
