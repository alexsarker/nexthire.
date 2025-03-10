import { Button } from "@mui/material";

const Buttons = ({ text, type = "button", size = "button" }) => {
  return (
    <Button
      variant="contained"
      type={type}
      size={size}
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
