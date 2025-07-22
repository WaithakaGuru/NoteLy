import { useReducer, useState,  } from "react";
import { Typography, Stack, Paper, Button, Alert, Box } from "@mui/material";
import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";

type ActionType = {
    type: string
    payload: {
        input: string
        value: string
    }
}

type ReducerStateType = {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string
}


function reducerFunc(state: ReducerStateType, action: ActionType) {
    switch(action.type) {
        case "HandleInput":
            return {
                ...state, [action.payload.input] : action.payload.value
            }

        default: 
         return state
    }
}

const initialState= {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
}

function RegisterPage() {
    const [error, setError] =  useState("");
    const [state, dispatch] = useReducer(reducerFunc, initialState)  
   
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "password", value: e.target.value}})
    }
    function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "confirmPassword", value: e.target.value}})
    }
    function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "email", value: e.target.value}})
    }
    function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "firstName", value: e.target.value}})
    }
    function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "lastName", value: e.target.value}})
    }
    function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({type: "HandleInput", payload: {input: "lastName", value: e.target.value}})
    }

    function handleSubmitLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();


    }
  return (
   <Box component={"div"} width={"100%"} className="bg-[#e7edf6ff]">
        <Stack mx={"auto"} my={"auto"} p={2} sx={{
            placeSelf: "center", alignItems: "center", maxWidth: "60rem"
        }} className="md:min-w-5/12">
            <img src="Notely1.png" width={"300px"} className="mx-auto" />
            
            <Typography variant="h6" fontSize={"2rem"} gutterBottom color="info" fontWeight={600}>
                Register New Account
            </Typography>
            {
                error && ( <Alert severity="error" variant="outlined" >{error}</Alert>)
            }
            <Paper component={"form"}  sx={{p: 3, bgcolor: "#f9f9f9", gap: 2,
            width:{xs: "95%", sm: "85%", md: "95%"}}}
                elevation={2} onSubmit={handleSubmitLogin}  className="flex flex-col justify-center gap-2"
            >   
                <Typography variant="body1" gutterBottom align="center">
                    Set up you account in a few quick steps
                </Typography>
               <Stack direction={"row"} gap={1}>
                   <TextInput onChange ={handleFirstName} value={state.firstName} v="#555" label="First name"/>
                   <TextInput onChange ={handleLastName} value={state.lastName} v="#555" label="Last name"/>
               </Stack>
                <TextInput onChange ={handleUserName} value={state.userName} v="#555" label="User Name" 
                placeholder="Enter a unique username"/>
                <TextInput onChange ={handleEmail} value={state.email} v="#555" label="Email" 
                placeholder="Enter a valid email"/>
                <PasswordInput onChange={handlePassword} value={state.password} v="#333"/>
                <PasswordInput onChange={handleConfirmPassword} value={state.confirmPassword} v="#333" label="Confirm password"/>
                
                <Button type="submit" sx={{textTransform: "none", mx:"auto", background: "#314653",
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
   </Box>
  )
}

export default RegisterPage