import { Button } from "@mui/material";

const Buttons = (text) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "#D32F2F",
        "&:hover": { backgroundColor: "#B71C1C" },
        color: "white",
      }}
    >
      {text}
    </Button>
  );
};

export default Buttons;
