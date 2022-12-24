import { CardProps } from "@mui/material/Card";
import { BaseCardProps } from "../components/card";
import { getCardElements } from "../components/card/util";
import { TopicType } from "../util/appIcons";

type CardVariationReturnProps = BaseCardProps & CardProps;

export default function useCardVariation(
  topicType: TopicType
): CardVariationReturnProps {
  return getCardElements(topicType);
}
