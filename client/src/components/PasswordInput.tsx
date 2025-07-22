import {Visibility, VisibilityOff } from "@mui/icons-material"
import {IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material"
import { useState } from "react"

function PasswordInput({onChange, value}: TextFieldProps) {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <TextField type={showPassword? "text": "password"} label="Password" variant="outlined"
     placeholder="****" fullWidth value={value} onChange={onChange}
     sx={{my:3, bgcolor: "#fafaf8",
        borderRadius: 1, outline: "none", color: "darkgrey",
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

     }} InputProps={
        {endAdornment: (
            <InputAdornment position="end">
                <IconButton onClick={()=> setShowPassword(!showPassword)} color="info">
                   {showPassword?<VisibilityOff/> :<Visibility/>}
                </IconButton>
            </InputAdornment>
        )} 
     }
     />
  )
}

export default PasswordInput