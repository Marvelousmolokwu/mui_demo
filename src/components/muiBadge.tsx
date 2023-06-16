import { Stack, Badge } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <EmailIcon />
      </Badge>
      <Badge badgeContent={5} color="secondary" showZero>
        <EmailIcon />
      </Badge>
      <Badge badgeContent={100} color="primary">
        <EmailIcon />
      </Badge>
      <Badge variant="dot" color="primary">
        <EmailIcon />
      </Badge>
    </Stack>
  );
};
