import ResizableBox from "../../ResizableBox";
import useDemoConfig from "../../util/useDemoConfig";
import React from "react";
import styles from "./index.css";
import { AxisOptions, Chart } from "react-charts";

export default function Line() {
  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: "time",
  });

  console.log({ data });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <div className="chart-container">
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <ResizableBox resizable={false}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </div>
  );
}
