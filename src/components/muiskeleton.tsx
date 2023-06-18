import { Stack, Skeleton } from "@mui/material";

export const Muiskeleton = () => {
  return (
    <Stack spacing={1} width={"250px"}>
      <Skeleton />
      <Skeleton variant="text" animation="wave" />
      <Skeleton variant="circular" width={"40px"} height={"40px"} />
    </Stack>
  );
};
