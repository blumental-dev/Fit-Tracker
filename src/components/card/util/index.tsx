import { CardProps } from "@mui/material/Card/Card";
import { BaseCardProps } from "..";
import { TopicType, TopicTypeEnum } from "../../../util/appIcons";
import getGraphCard from "../components/graphCard";
import getInsightsCard from "../components/insightsCard";

const cardDictionary = {
  [TopicTypeEnum.INSIGHTS]: getInsightsCard,
  [TopicTypeEnum.GRAPH]: getGraphCard,
  [TopicTypeEnum.NOTE]: getGraphCard,
  [TopicTypeEnum.OBJECTIVE]: getGraphCard,
  [TopicTypeEnum.WEIGHT]: getGraphCard,
  [TopicTypeEnum.WORKOUT]: getGraphCard,
};
function getCardElements(topicType: TopicType): BaseCardProps & CardProps {
  const res = cardDictionary[topicType]();
  console.log({ topicType, res });
  return cardDictionary[topicType]();
}

export { getCardElements };
