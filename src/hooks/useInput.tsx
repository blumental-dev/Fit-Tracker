import { useCallback, useEffect, useState } from "react";

export default function useInput(
  defaultValue: string
): [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string>>
] {
  const [value, setValue] = useState<string>(defaultValue || "");

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [event]
  );

  return [value, onChange, setValue];
}
