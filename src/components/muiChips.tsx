import { Stack, Chip, Avatar } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const MuiChips = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip
        label="chip"
        color="primary"
        size="medium"
        icon={<EmailIcon />}
      ></Chip>
      <Chip
        label="chip"
        variant="outlined"
        color="secondary"
        size="medium"
        avatar={<Avatar>V</Avatar>}
      ></Chip>
    </Stack>
  );
};
