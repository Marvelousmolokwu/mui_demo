import { Box, List, ListItem, ListItemText } from "@mui/material";

export const MuiList = () => {
  return (
    <Box sx={{ width: "400px", bgcolor: "#efefef" }}>
      <List>
        <ListItem>
          <ListItemText primary="List item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 2" />
        </ListItem>
        <ListItem>
          <ListItemText primary="List item 3" />
        </ListItem>
      </List>
    </Box>
  );
};
