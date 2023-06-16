import { Stack, Avatar, AvatarGroup } from "@mui/material";

export const MuiAvatar = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={2}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>
          <Avatar
            src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646473/woman1_wzayep.avif"
            alt="jane doe"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>Ck</Avatar>
        <Avatar
          src="https://res.cloudinary.com/ddgyd8szc/image/upload/v1685646473/woman1_wzayep.avif"
          alt="jane doe"
        />
      </Stack>
    </>
  );
};
