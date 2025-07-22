import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material"
import PasswordInput from "../components/PasswordInput"
import { useState } from "react";

function LoginPage() {
    const [error, setError] =  useState("")

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }
  return (
    <Stack mx={"auto"} my={"auto"} p={2} sx={{
        background:"#e7edf6ff", placeSelf: "center", alignItems: "center"
    }}>
        <img src="Notely1.png" width={"300px"} className="mx-auto" />
        
        <Typography variant="h6" fontSize={"2rem"} gutterBottom color="info" fontWeight={600}>
            Welcome Back
        </Typography>
        {
            error && ( <Alert severity="error" variant="outlined" >{error}</Alert>)
        }
        <Paper component={"form"}  sx={{p: 1, bgcolor: "transparent", width:{xs: "95%", sm: "85%", md: "65%"}}}
            elevation={0} onSubmit={handleSubmitLogin}  
        >
            <TextField placeholder="Username or Email" label="Username or Email" 
                fullWidth sx={{
                    outline: "none", border: "none", bgcolor: "#fafaf8",
                     borderRadius: 1,  color: "darkgrey",
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "#859ec3", // default border
                    },
                    "&:hover fieldset": {
                        borderColor: "#84aeec", // border on hover
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "#859ec3", // border on focus
                        borderWidth: "2px", // optional: make it thicker
                    },}
                 }} 
            />
            <PasswordInput/>
            
            <Button type="submit" sx={{textTransform: "none", mx:"auto", background: "#a9b6ca"}}
                variant="contained"  size="large" fullWidth
            >
                Sign in 
            </Button>
        </Paper>
    </Stack>
  )
}

export default LoginPage