import React from "react";
import BaseCard from "../../components/card";
import withCardVariation from "../../hoc/withCardVariation";
import { TopicType, TopicTypeEnum } from "../../util/appIcons";

const HocCard = withCardVariation(BaseCard);

type GridViewProps = {
  content: TopicType | TopicType[];
};

const GridView: React.FunctionComponent<GridViewProps> = ({ content }) => {
  const arr = [TopicTypeEnum.INSIGHTS, TopicTypeEnum.GRAPH] as TopicType[];

  return (
    <>
      {Array.isArray(content) ? (
        content.map((item, index) => (
          <HocCard key={`topic-${index + 1}`} topicType={item} />
        ))
      ) : (
        <HocCard key={`topic-${1}`} topicType={content} />
      )}
    </>
  );
};

export default GridView;
