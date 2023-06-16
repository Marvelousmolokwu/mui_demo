import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

export const MuiBreadCrums = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Link href="Home">Home</Link>
        <Link href="Home">Catalogue</Link>
        <Link href="Home">Accessories</Link>
        <Typography variant="h6">
          <Link href="Home" color="secondary">
            Shoes
          </Link>
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};
