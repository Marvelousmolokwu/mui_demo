import { Tooltip, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

export const MuiTooltip = () => {
  return (
    <Tooltip
      title="email"
      placement="top-start"
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <EmailIcon />
      </IconButton>
    </Tooltip>
  );
};
