import { Stack, Link, Typography } from "@mui/material";

export const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row">
      <Typography variant="h6">
        <Link href="#" color="secondary">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};
