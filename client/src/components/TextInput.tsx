import { TextField, type TextFieldProps } from "@mui/material"

function TextInput({onChange, value}: TextFieldProps) {
  return (
    <TextField placeholder="Username or Email" label="Username or Email" 
        fullWidth onChange={onChange} value={value}
         sx={{outline: "none", border: "none", bgcolor: "#fafaf8",
            borderRadius: 1,  color: "darkgrey",
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
        },}
        }} 
    />
  )
}

export default TextInput