import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component={"img"}
          height="14"
          image="/src/assets/react.svg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color={"text.secondary"}>
            workspace in our daily activities requires proper interaction as
            event is considered as one of the frequent task in an organization.
            Events have the distinctive ability to bring people physically
            together, and to motivate and make them communicate in ways that
            cannot be easily copied by other means. Although events are
            important part of human life but the subject however is poorly
            developed and there is a need for proper enlightenment.{" "}
          </Typography>
        </CardContent>
        <CardActions>
          <Button>Share</Button>
          <Button>Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
