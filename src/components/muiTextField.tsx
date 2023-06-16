import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField
          label="password"
          variant="outlined"
          color="secondary"
          size="small"
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          error={!value}
          helperText={!value ? "required" : "do not share password"}
        />
        <TextField label="name" variant="filled" required />
        <TextField
          label="name"
          variant="standard"
          helperText="add your first name"
        />
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
