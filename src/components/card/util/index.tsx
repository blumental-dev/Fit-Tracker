import { CardProps } from "@mui/material/Card/Card";
import { BaseCardProps } from "..";
import { TopicType, TopicTypeEnum } from "../../../util/appIcons";
import getGraphCard from "../components/graphCard";
import getInsightsCard from "../components/insightsCard";
import getSettingsCard from "../components/settingsCard";

const cardDictionary = {
  [TopicTypeEnum.INSIGHTS]: getInsightsCard,
  [TopicTypeEnum.GRAPH]: getGraphCard,
  [TopicTypeEnum.NOTE]: getGraphCard,
  [TopicTypeEnum.OBJECTIVE]: getGraphCard,
  [TopicTypeEnum.WEIGHT]: getGraphCard,
  [TopicTypeEnum.WORKOUT]: getGraphCard,
  [TopicTypeEnum.SETTINGS]: getSettingsCard,
};
function getCardElements(topicType: TopicType): BaseCardProps & CardProps {
  return cardDictionary[topicType]();
}

export { getCardElements };
