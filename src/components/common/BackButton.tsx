import { Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  to?: string;
  label?: string;
}

const BackButton = ({ to = "/", label = "Back to Home" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      startIcon={<ArrowBackIosNewIcon />}
      onClick={() => navigate(to)}
      sx={{ mb: 2, textTransform: "none", fontWeight: 500 }}
    >
      {label}
    </Button>
  );
};

export default BackButton;
