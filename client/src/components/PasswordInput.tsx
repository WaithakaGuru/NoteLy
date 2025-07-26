import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";
import { useState } from "react";

type T = TextFieldProps & { v?: string };

function PasswordInput({
  onChange,
  value,
  v = "#333",
  label = "Password",
}: T) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      type={showPassword ? "text" : "password"}
      label={label}
      variant="outlined"
      required
      placeholder="****"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        bgcolor: "#fafaf8",
        borderRadius: 1,
        outline: "none",
        color: "darkgrey",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#859ec3",
          },
          "&:hover fieldset": {
            borderColor: "#84aeec",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#859ec3",
            borderWidth: "2px",
          },
        },
        "& label.Mui-focused": { color: v, mt: "-.2rem" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              color="info"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
