import { Button } from "@mui/material";

const ButtonOut = ({ text }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        color: "#D32F2F",
        borderColor: "#D32F2F",
        "&:hover": {
          backgroundColor: "#FDEAEA",
          borderColor: "#B71C1C",
          color: "#B71C1C",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default ButtonOut;
