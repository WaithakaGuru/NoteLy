import { Alert, Button, Paper, Stack, TextField, Typography } from "@mui/material"
import PasswordInput from "../components/PasswordInput"
import { useState } from "react";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";



function LoginPage() {
    const [error, setError] =  useState("");
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")

    function handleIdentifier(e: React.ChangeEvent<HTMLInputElement>) {
        setIdentifier(e.target.value);
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

    }
  return (
    <Stack mx={"auto"} my={"auto"} p={2} sx={{
        background:"#0d1726", placeSelf: "center", alignItems: "center"
    }}>
        <img src="NotelyWhite.png" width={"300px"} className="mx-auto" />
        
        <Typography variant="h6" fontSize={"2rem"} gutterBottom color="info" fontWeight={600}>
            Welcome Back
        </Typography>
        {
            error && ( <Alert severity="error" variant="outlined" >{error}</Alert>)
        }
        <Paper component={"form"}  sx={{p: 1, bgcolor: "transparent", width:{xs: "95%", sm: "85%", md: "65%"}}}
            elevation={0} onSubmit={handleSubmitLogin}  
        >
           <TextInput onChange ={handleIdentifier} value={identifier}/>
            <PasswordInput onChange={handlePassword} value={password}/>
            
            <Button type="submit" sx={{textTransform: "none", mx:"auto", background: "#637899",
                fontWeight: 600, fontSize: "1.1rem"
            }}
                variant="contained"  size="large" fullWidth 
            >
                Sign in 
            </Button>

            <Typography variant="subtitle1" gutterBottom mt={2} color="info">
                New to NoteLy? 
                <div className="text-lime-500 inline-flex font-bold ml-1 hover:underline">
                    <Link to={"/register"} title="Create New NoteLy account">Sign Up Now</Link>
                </div>
            </Typography>
        </Paper>
    </Stack>
  )
}

export default LoginPage