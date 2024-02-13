import * as React from "react";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Stack from "@mui/material/Stack";

export default function IconLabelButton() {
  return (
    <Stack direction="row" spacing={2} style={{ color: "white" }}>
      <Button variant="outlined" size="large" endIcon={<ArrowForwardIcon />}>
        Profile
      </Button>
    </Stack>
  );
}
