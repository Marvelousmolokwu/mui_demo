import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

export const MuiSpeedDail = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle="copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="share" />
    </SpeedDial>
  );
};
