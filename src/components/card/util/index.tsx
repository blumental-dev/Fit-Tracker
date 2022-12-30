import { CardProps } from "@mui/material/Card/Card";
import { BaseCardProps } from "..";
import { TopicType, TopicTypeEnum } from "../../../util/appIcons";
import getEvercisesCard from "../components/exercisesCard";
import getGraphCard from "../components/graphCard";
import getInsightsCard from "../components/insightsCard";
import getSettingsCard from "../components/settingsCard";
const cardTypeEnum = { ...TopicTypeEnum };
const cardDictionary = {
  [cardTypeEnum.INSIGHTS]: getInsightsCard,
  [cardTypeEnum.GRAPH]: getGraphCard,
  [cardTypeEnum.NOTE]: getGraphCard,
  [cardTypeEnum.OBJECTIVE]: getGraphCard,
  [cardTypeEnum.WEIGHT]: getGraphCard,
  [cardTypeEnum.WORKOUT]: getGraphCard,
  [cardTypeEnum.SETTINGS]: getSettingsCard,
  [cardTypeEnum.EXERCISE_BACKLOG]: getEvercisesCard,
};
function getCardElements(topicType: TopicType): BaseCardProps & CardProps {
  return cardDictionary[topicType]();
}

export { getCardElements };
