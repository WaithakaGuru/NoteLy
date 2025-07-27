import {Alert, Box, Button, CardMedia, IconButton, Paper, Stack, TextField, Typography } from "@mui/material"
import { Delete, Notes, Dashboard, Edit, Cancel } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar"
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useGetUserDetails } from "../services/fetchRequests";
import PasswordInput from "../components/PasswordInput";

type UserInfo = {
  firstName: string,
  lastName: string,
  userName: string,
  emailAddress: string
}

type ActionType = {
  type: string,
  data: {
    el: string,
    value: string
  }
}

function controlUserInfoInputs(state: UserInfo, action: ActionType) {
  switch(action.type) {
    case "input" :
      return{...state, [action.data.el]: action.data.value};
    
    default: 
      return state;
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  emailAddress: "",
}

function ProfilePage() {
  const [image, setImage] = useState<File|undefined>();
  const [imageError, setImageError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, alter] = useReducer(controlUserInfoInputs, initialState);
  const [currentPasword, setCurrentPassword] = useState("");
  const [newPasword, setNewPassword] = useState("");

  const {data} = useGetUserDetails();

  useEffect(()=>{
    if(data) {
      alter({type: "input", data:{el: "firstName", value: data.firstName}})
      alter({type: "input", data:{el: "lastName", value: data.lastName}})
      alter({type: "input", data:{el: "userName", value: data.userName}})
      alter({type: "input", data:{el: "emailAddress", value: data.emailAddress}})
    }
  }, [data])

  function handleCallHiddenInput() {
    fileInputRef.current?.click();
    console.log(fileInputRef.current);
  }

  function handleFileUpload (e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if(!file?.type.startsWith("image/")) {
      setImageError("File must be an image!!");
      return
    }
    if(file?.size! >= 5 * 1024 * 1024) {
      setImageError("Choose an image less than 5mb!!");
      return 
    }
    if(file) setImage(file);
     console.log(image);
  }

  function handleFirstName (e: React.ChangeEvent<HTMLInputElement>) {
    alter({type: "input", data: {el: "firstName", value: e.target.value}})
  }
  function handlLastName (e: React.ChangeEvent<HTMLInputElement>) {
    alter({type: "input", data: {el: "lastName", value: e.target.value}})
  }
  function handleUserName (e: React.ChangeEvent<HTMLInputElement>) {
    alter({type: "input", data: {el: "userName", value: e.target.value}})
  }
  function handleEmail (e: React.ChangeEvent<HTMLInputElement>) {
    alter({type: "input", data: {el: "emailAddress", value: e.target.value}})
  }

  function handleCurrentPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPassword(e.target.value);
  }

  function handleNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value);
  }

  async function handleUpdateUserInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try{

    }catch(err) {

    }
  }

  async function handleUpdateUserPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try{

    }catch(err) {

    }
  }
  
  return (
     <Box
      component={"main"}
      className="w-full gap-2 flex h-[36rem] py-2"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh",  md:"35rem"}}}
      >
        <Box
          component={"section"}
          className="flex gap-4 border-b border-gray-300"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack direction={"row"} className="justify-between min-w-1/2">
            <Box>
              <Box
                component={"div"}
                className="flex items-center w-full ml-[1rem]"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700 "
                >
                  Profile
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Design how you want to be addressed
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="/dashboard"
                  color="secondary"
                  variant="contained"
                  startIcon={<Dashboard />}
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-38 text-gray-50 text-nowrap"
                  title="Write a new note"
                >
                  Dashboard
                </Button>
                <Button
                  href="/dashboard/trash"
                  color="warning"
                  startIcon={<Delete className="mr-[-.5rem]" />}
                  variant="outlined"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-20 text-gray-50"
                  title="See deleted notes"
                >
                  Trash
                </Button>
                <Button
                  href="/dashboard/note"
                  color="success"
                  startIcon={<Notes className="mr-[-.5rem]" />}
                  variant="outlined"
                  title="All my notes"
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-28 text-gray-50 text-nowrap"
                >
                  My Notes
                </Button>
              </Stack>
            </Box>
          </Stack>
          <Stack component={"section"} className="border border-gray-300 w-full p-2 m-2 rounded-xl shadow-2xs gap-12 items-center" direction={"row"}>
            {imageError && 
              <Alert severity="error">
                {imageError} 
                <IconButton color="secondary" onClick={()=> setImageError("")}>
                  <Cancel/>
                </IconButton>
              </Alert>
            }
            <Box className="w-30 h-30 rounded-full bg-transparent shadow relative z-0"  sx={{borderRadius: "50%"}}>
              <CardMedia component={"img"} image="../../me.png" className="h-30 max-w-30 rounded-full" /> 
              <IconButton onClick={handleCallHiddenInput} title="Update Profile Photo" className="w-10 h-10 z-50 bottom-[.4rem]" sx={{bgcolor: "#6d28d9", color: "#f9fafb", right: "-.5rem", position:"absolute", '&:hover': {
                bgcolor: "oklch(52.7% 0.265 303.9)"}, border: ".3rem solid #e5e7eb" 
              }}>
                <Edit/>
                <input type="file" className="hidden" onChange={handleFileUpload} ref={fileInputRef}/>
              </IconButton>
            </Box>
            <Box>
              <Typography variant="body1" gutterBottom> <strong><i>Name:</i></strong> {data?.firstName} {data?.lastName}</Typography>
              <Typography variant="body1" gutterBottom> <strong><i>Username:</i></strong> {data?.userName}</Typography>
              <Typography variant="body1" gutterBottom> <strong><i>Emali:</i></strong> {data?.emailAddress}</Typography>
            </Box> 
          </Stack>
        </Box>
        <Stack direction={{xs: "column", md: "row"}} className="p-4" gap={8}>
          <Box component={"form"} onSubmit={handleUpdateUserInfo} className="bg-red border border-gray-300 p-6
            flex flex-col items-center shadow rounded-2xl border-r-2 border-r-purple-600 min-w-[35%]" 
             sx={{bgcolor:"#fff"}} gap={1}
          >
            <Typography variant="h6" fontWeight={"bold"} gutterBottom 
              className="self-start pb-4" color="secondary"
            >
               Update Your Profile
            </Typography>
            <TextField label="First name" sx={{bgcolor: "transparent", px:".5rem"}} 
              className="rounded-2xl" fullWidth variant="standard"
              color="secondary" 
              onChange={handleFirstName}
              value={state.firstName}
            />
            <TextField label="Last name" sx={{bgcolor: "transparent", m:".5rem", borderRadius: "2rem", px:".5rem" }}
             fullWidth variant="standard"
             color="secondary"
             onChange={handlLastName}
             value={state.lastName}
            />
            <TextField label="Username" sx={{bgcolor: "transparent", m:".5rem", borderRadius: "2rem", px:".5rem" }}
             fullWidth variant="standard"
             color="secondary"
              onChange={handleUserName}
              value={state.userName}
            />
            <TextField label="Email" sx={{bgcolor: "transparent", m:".5rem", borderRadius: "2rem", px:".5rem" }}
             fullWidth variant="standard"
             color="secondary"
              onChange={handleEmail}
              value={state.emailAddress}
            />
            <Button type="submit" variant="contained" color="secondary" className="self-start">
              Save Changes
            </Button>
          </Box>
          <Box component={"form"} onSubmit={handleUpdateUserPassword} className="bg-red border border-gray-300 p-6
            flex flex-col items-center shadow rounded-2xl border-l-2 border-l-orange-500 min-w-[30%]" 
             sx={{bgcolor:"#fff"}} gap={2}
          >
            <Typography variant="h6" fontWeight={"bold"} gutterBottom 
              className="self-start pb-4" color="warning"
            >
              Set A new password
            </Typography>
            <PasswordInput label="Current Password" value={currentPasword} onChange={handleCurrentPassword} v="#e65100" variant="standard"/>
            <PasswordInput label="New Password" value={newPasword} onChange={handleNewPassword} v="#e65100" variant="standard"/>
            {/* <TextField label="First name" sx={{bgcolor: "transparent", px:".5rem"}} 
              className="rounded-2xl" fullWidth variant="standard"
              color="secondary" 
              onChange={handleFirstName}
              value={state.firstName}
            /> */}
            <Button type="submit" variant="contained" color="warning" className="self-start">
              Change password
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Box>
  )
}

export default ProfilePage;
