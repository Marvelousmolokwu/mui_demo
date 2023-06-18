import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const Muiprogress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <LinearProgress />
    </Stack>
  );
};
