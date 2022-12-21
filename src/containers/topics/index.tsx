import CustomCard from "../../components/card";
import LineChart from "../../components/LineChart";
import { TopicTypeEnum } from "../../util/appIcons";
import { useDeviceQuery } from "../../util/breakpoints";
import "./index.css";

const Topics: React.FunctionComponent<any> = () => {
  const { isMobile } = useDeviceQuery();

  const arr = [
    TopicTypeEnum.WEIGHT,
    TopicTypeEnum.OBJECTIVE,
    TopicTypeEnum.NOTE,
    TopicTypeEnum.WORKOUT,
  ];

  return (
    <div className="topics-root">
      {arr.map((item, index) => (
        <div
          key={`topic-${index + 1}`}
          style={{
            margin: isMobile
              ? "1rem 1.5rem 2.5rem 1.5rem"
              : "1rem 2.5rem 2.5rem 4rem",
          }}
        >
          <CustomCard topicType={item as TopicTypeEnum}>
            <LineChart />
          </CustomCard>
        </div>
      ))}
    </div>
  );
};

export default Topics;
