import { Stack, Alert, AlertTitle } from "@mui/material";

export const MuiAlerts = () => {
  return (
    <Stack spacing={2}>
      <Alert
        severity="error"
        variant="outlined"
        onClose={() => alert("close alert")}
      >
        this an error alert
      </Alert>
      <Alert severity="warning">
        <AlertTitle>Error</AlertTitle>this an error alert
      </Alert>
      <Alert severity="info">this an error alert</Alert>
      <Alert severity="success" variant="filled">
        this an error alert
      </Alert>
    </Stack>
  );
};
