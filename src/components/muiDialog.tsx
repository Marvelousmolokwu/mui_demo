import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";
export const MuiDialog = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">submit the text</DialogTitle>
        <DialogContent id="dialog-description">
          <DialogContentText>
            Are you sure you want ti submit ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => setOpen(false)}>
            Yes
          </Button>
          <Button>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
