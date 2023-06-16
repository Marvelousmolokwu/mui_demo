import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";
export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };
  return (
    <div>
      <FormControlLabel
        label="dark mode"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </div>
  );
};
