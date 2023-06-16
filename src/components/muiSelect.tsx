import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";
export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);
  const handleChange = (event: React.ChangeEvent<HTMLElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="select a country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
      >
        <MenuItem value="IN">india</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
