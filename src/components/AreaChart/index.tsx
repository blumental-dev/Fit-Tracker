import useDemoConfig from "../../util/useDemoConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

export default function Bar() {
  const { data, randomizeData } = useDemoConfig({
    series: 1,
    dataType: "time",
  });

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
        // OR
        // elementType: "area",
      },
    ],
    []
  );

  return (
    <div style={{ width: "auto", height: "50vh" }}>
      {/* <ResizableBox> */}
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
      {/* </ResizableBox> */}
    </div>
  );
}
