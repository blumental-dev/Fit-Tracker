import * as React from "react";
import { BaseCardProps } from "../components/card";
import useCardVariation from "../hooks/useCardVariation";
import { TopicType } from "../util/appIcons";

type InjectedProps = {
  topicType: TopicType;
};

const withCardVariation = <P extends InjectedProps>(
  WrappedComponent: React.FC<BaseCardProps>
) => {
  type Props = P;

  const WithCard: React.FC<Props> = ({ topicType }) => {
    const cardElements = useCardVariation(topicType);
    return <WrappedComponent {...cardElements} />;
  };

  return WithCard;
};

export default withCardVariation;
