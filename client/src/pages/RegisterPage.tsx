import { useState,  } from "react";
import { Typography, Stack, Paper, Button, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

function RegisterPage() {
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
        background:"#e7edf6ff", placeSelf: "center", alignItems: "center"
    }}>
        <img src="Notely1.png" width={"300px"} className="mx-auto" />
        
        <Typography variant="h6" fontSize={"2rem"} gutterBottom color="info" fontWeight={600}>
            
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
                Sign up
            </Button>

            <Typography variant="subtitle1" gutterBottom mt={2}>
                Already have an Account? 
                <div className="text-lime-500 inline-flex font-bold ml-1 hover:underline">
                    <Link to={"/login"} title="Create New NoteLy account">Sign In</Link>
                </div>
            </Typography>
        </Paper>
    </Stack>
  )
}

export default RegisterPage