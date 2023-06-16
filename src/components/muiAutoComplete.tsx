import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

export const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => setValue(newValue)}
        options={skills}
        renderInput={(params) => <TextField {...params} label="skills" />}
        freeSolo
      />
    </Stack>
  );
};
