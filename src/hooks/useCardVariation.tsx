import { BaseCardProps } from "../components/card";
import { getCardElements } from "../components/card/util";
import { TopicType } from "../util/appIcons";

type CardVariationReturnProps = BaseCardProps;

export default function useCardVariation(
  topicType: TopicType
): CardVariationReturnProps {
  return getCardElements(topicType);
}
