import Rating from "@mui/material/Rating";
import { useState } from "react";

type CustomRatingProps = {
  value: number;
  readOnly: boolean;
  onChangeValue: (value: number) => number;
};

const CustomRating: React.FunctionComponent<CustomRatingProps> = ({
  value,
  readOnly,
  onChangeValue,
}) => {
  const [controlledValue, setControlledValue] = useState<number>(value || 0);
  return (
    <Rating
      value={controlledValue}
      precision={0.5}
      readOnly={readOnly || false}
      onChange={(event, newValue) => {
        if (newValue) {
          setControlledValue(newValue);
          onChangeValue(newValue);
        }
      }}
    />
  );
};

export default CustomRating;
