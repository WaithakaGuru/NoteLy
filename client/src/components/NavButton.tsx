import { Box, Button, type ButtonProps } from "@mui/material";
import { useLocation } from "react-router-dom";

type NavButtonType = ButtonProps & {
  label: string;
  m?: number;
  def?: string;
};

function NavButton({
  href,
  label,
  startIcon,
  title = "",
  m = 0,
  def,
}: NavButtonType) {
  const path = useLocation().pathname;
  return (
    <Button
      startIcon={startIcon}
      variant="outlined"
      title={title}
      href={href}
      size="small"
      sx={{
        color: "#364153",
        textWrap: "nowrap",
        background:
          href === path ? "linear-gradient(45deg, #dce6f6, #a9b6ca)" : "",
        m: m,
        borderColor: path === href ? "transparent" : "#364153",
        textTransform: "none",
        transition: "border-color .4s ease-in-out",
        "&:hover": {
          background: "linear-gradient(45deg, #dce6f6, #a9b6ca)",
          borderColor: "transparent",
        },
      }}
    >
      {def}
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>{label}</Box>
    </Button>
  );
}

export default NavButton;
