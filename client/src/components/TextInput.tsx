import { TextField, type TextFieldProps } from "@mui/material";

type T = TextFieldProps & { v?: string };

function TextInput({
  onChange,
  value,
  v = "#333",
  label = "Username or Email",
  placeholder,
}: T) {
  return (
    <TextField
      placeholder={placeholder}
      label={label}
      fullWidth
      onChange={onChange}
      value={value}
      required
      sx={{
        outline: "none",
        border: "none",
        bgcolor: "#fafaf8",
        borderRadius: 1,
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
        "& label": {
          fontSize: "0.9rem",
        },
        "& label.Mui-focused": {
          color: v,
          fontSize: "1rem",
          mt: "-.3rem",
        },
      }}
    />
  );
}

export default TextInput;
