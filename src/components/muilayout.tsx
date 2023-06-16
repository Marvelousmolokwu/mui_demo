import { Box, Stack, Divider, Paper } from "@mui/material";

export const Muilayout = () => {
  return (
    <Paper sx={{ padding: "32px" }} elevation={1}>
      <Stack
        direction="row"
        spacing={2}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          component="h1"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          CodeEvolution
        </Box>
        <Box
          component="h1"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          CodeEvolution
        </Box>
      </Stack>
    </Paper>
  );
};
