import CustomCard from "../../components/card";
import LineChart from "../../components/LineChart";
import "./index.css";

const Topics: React.FunctionComponent<any> = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className="topics-root">
      {arr.map((item, index) => (
        <div
          key={`topic-${index + 1}`}
          style={{ margin: "1rem", marginBottom: "2.5rem" }}
        >
          <CustomCard>
            <LineChart />
          </CustomCard>
        </div>
      ))}
    </div>
  );
};

export default Topics;
