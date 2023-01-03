import { Box } from "@mui/material";
import ExerciseCard from "../../../exerciseCard";

export default function BackCatalog() {
  const arr = [1, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6];
  return (
    <>
      {arr.map(() => (
        <Box
          sx={{
            margin: "1rem",
            borderRadius: "1rem",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        >
          <ExerciseCard />
        </Box>
      ))}
    </>
  );
}
