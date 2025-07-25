import { useReducer, useState } from "react";
import { Typography, Stack, Paper, Button, Alert, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import TextInput from "../components/TextInput";
import PasswordInput from "../components/PasswordInput";
import { useRegister } from "../services/postRequests";
import { isAxiosError } from "axios";
import isStrongPassword from "../utils/checkPasswordStrength";

type ActionType = {
  type: string;
  payload: {
    input: string;
    value: string;
  };
};

type ReducerStateType = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
};

function reducerFunc(state: ReducerStateType, action: ActionType) {
  switch (action.type) {
    case "HandleInput":
      return {
        ...state,
        [action.payload.input]: action.payload.value,
      };

    default:
      return state;
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  emailAddress: "",
  password: "",
  confirmPassword: "",
};

function RegisterPage() {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  const {mutateAsync: register, isPending} = useRegister()

  
  async function handleSubmitRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("")
    try{
      if(!(state.password === state.confirmPassword))  {
        setError("Password and Confirm Password must match!!");
        return 
      }
      if(!isStrongPassword(state.password)) {
        setError("Choose a stronger password!!");
        return
      }
      isPending ? setIsLoading(true) : setIsLoading(false);
      const user = await register(state);
      if(user) navigate("/login")
    }catch(err){
      if(isAxiosError(err)){
        setError(err.response?.data.message)
      }
      else {
        console.log(err);
        setError("Something went wrong!!")
      }
    }
  }
  function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "password", value: e.target.value },
    });
  }
  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "confirmPassword", value: e.target.value },
    });
  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "emailAddress", value: e.target.value },
    });
  }
  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "firstName", value: e.target.value },
    });
  }
  function handleLastName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "lastName", value: e.target.value },
    });
  }
  function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "HandleInput",
      payload: { input: "userName", value: e.target.value },
    });
  }
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f3f4f6, #05070b)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
        pt: 0,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: { xs: "100%", sm: "90%", md: "80%" },
          maxWidth: "70rem",
          height: { md: "max-content" },
          overflow: "hidden",
          borderRadius: 4,
          m: 2,
        }}
      >
        <Box
          sx={{
            flex: 1,
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 2,
            bgcolor: "#f9f9f9",
          }}
        >
          <img
            src="Notely1.png"
            width="150px"
            alt="Notely logo"
            className="mb-[-1rem]"
          />
          <Typography variant="h5" fontWeight={600}>
            Get Started Now
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Set up your account in a few quick steps
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <Paper
            component={"form"}
            sx={{
              p: 1,
              bgcolor: "transparent",
              width: { xs: "95%", sm: "85%", md: "85%" },
            }}
            elevation={0}
            onSubmit={handleSubmitRegister}
            className="flex flex-col gap-6"
          >
            <Stack direction="row" spacing={2}>
              <TextInput
                label="First name"
                onChange={handleFirstName}
                value={state.firstName}
                v="#333"
              />
              <TextInput
                label="Last name"
                onChange={handleLastName}
                value={state.lastName}
                v="#333"
              />
            </Stack>
            <TextInput
              label="Username"
              onChange={handleUserName}
              value={state.userName}
              placeholder="Enter a unique username"
              v="#333"
            />
            <TextInput
              label="Email"
              onChange={handleEmail}
              value={state.emailAddress}
              placeholder="Enter a valid email"
              v="#333"
            />
            <PasswordInput
              label="Password"
              onChange={handlePassword}
              value={state.password}
              v="#333"
            />
            <PasswordInput
              label="Confirm password"
              onChange={handleConfirmPassword}
              value={state.confirmPassword}
              v="#333"
            />

            <Button
              variant="contained"
              size="large"
              type="submit"
              fullWidth
              loading={isLoading}
              sx={{
                textTransform: "none",
                backgroundColor: "#314653",
                fontWeight: 600,
              }}
            >
              Sign up
            </Button>

            <Typography variant="body2" align="center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#10b981] font-semibold hover:underline"
              >
                Sign in
              </Link>
            </Typography>
          </Paper>
        </Box>
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(NotelyRegister.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", md: "block" },
          }}
        />
      </Paper>
    </Box>
  );
}

export default RegisterPage;
