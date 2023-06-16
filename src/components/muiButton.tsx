import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

export const MuiButton = () => {
  const [format, setFormat] = useState<string[] | null>(null);
  console.log(format);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[] | null
  ) => {
    setFormat(updatedFormats);
  };
  return (
    <Stack>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          color="success"
          href="https://google.com"
          size="small"
        >
          text
        </Button>
        <Button
          endIcon={<SendIcon />}
          variant="contained"
          color="success"
          size="medium"
        >
          text
        </Button>
        <Button startIcon={<SendIcon />} variant="outlined" size="large">
          text
        </Button>
        <IconButton color="success">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row" spacing={2}>
        <ButtonGroup variant="contained" orientation="vertical">
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={format}
          onChange={handleFormatChange}
          size="small"
          color="success"
          orientation="vertical"
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>

          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>

          <ToggleButton value="underLine" aria-label="underline">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
