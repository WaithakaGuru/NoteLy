import {
  Alert,
  Box,
  Button,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Delete, Notes, Dashboard, Edit, Cancel, Settings, Password, Person } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useGetUserDetails } from "../services/fetchRequests";
import PasswordInput from "../components/PasswordInput";
import { useGenericUser } from "../services/patchRequests";
import { isAxiosError } from "axios";
import { client } from "../main";
import isStrongPassword from "../utils/checkPasswordStrength";

type UserInfo = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
};

type ActionType = {
  type: string;
  data: {
    el: string;
    value: string;
  };
};

function controlUserInfoInputs(state: UserInfo, action: ActionType) {
  switch (action.type) {
    case "input":
      return { ...state, [action.data.el]: action.data.value };

    default:
      return state;
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  emailAddress: "",
};

function ProfilePage() {
  const [image, setImage] = useState<File | undefined>();
  const [imageError, setImageError] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successPass, setSuccessPass] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [state, alter] = useReducer(controlUserInfoInputs, initialState);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [profSetting, setProfSetting] = useState(true);

  const { mutateAsync: updateInfo, isPending } = useGenericUser(
    "updateUserInfo",
    "/user",
  );
  const { mutateAsync: updatePass, isPending: passPending } = useGenericUser(
    "updateUserPassword",
    "/auth/password",
  );

  const { data } = useGetUserDetails();

  useEffect(() => {
    if (data) {
      alter({
        type: "input",
        data: { el: "firstName", value: data.firstName },
      });
      alter({ type: "input", data: { el: "lastName", value: data.lastName } });
      alter({ type: "input", data: { el: "userName", value: data.userName } });
      alter({
        type: "input",
        data: { el: "emailAddress", value: data.emailAddress },
      });
    }
  }, [data]);

  function handleCallHiddenInput() {
    fileInputRef.current?.click();
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file?.type.startsWith("image/")) {
      setImageError("File must be an image!!");
      return;
    }
    if (file?.size! >= 5 * 1024 * 1024) {
      setImageError("Choose an image less than 5mb!!");
      return;
    }
    if (file) setImage(file);
    console.log(image);
  }

  function handleFirstName(e: React.ChangeEvent<HTMLInputElement>) {
    alter({ type: "input", data: { el: "firstName", value: e.target.value } });
  }
  function handlLastName(e: React.ChangeEvent<HTMLInputElement>) {
    alter({ type: "input", data: { el: "lastName", value: e.target.value } });
  }
  function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
    alter({ type: "input", data: { el: "userName", value: e.target.value } });
  }
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    alter({
      type: "input",
      data: { el: "emailAddress", value: e.target.value },
    });
  }

  function handleCurrentPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setCurrentPassword(e.target.value);
  }

  function handleNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value);
  }

  async function handleUpdateUserInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const updatedUser = await updateInfo(state);
      if (updatedUser) {
        setError("");
        setSuccess("Profile information updated successfully");
        client.invalidateQueries({ queryKey: ["GetUserDetails"] });
      }
    } catch (err) {
      setSuccess("");
      if (isAxiosError(err))
        setError(err.response?.data.message || "Unknown Error!!");
      else {
        console.log(err);
        setError("Something went Wrong! Try updating later!!");
      }
    }
  }

  async function handleUpdateUserPassword(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      if (!isStrongPassword(newPassword)) {
        setSuccessPass("")
        setPasswordError("Choose a stronger password!!");
        return;
      }
      const updatedPass = await updatePass({ currentPassword, newPassword });
      if (updatedPass) setSuccessPass("Password changed successfully!");
    } catch (err) {
      setSuccessPass("")
      if (isAxiosError(err))
        setPasswordError(
          err.response?.data.message || "Unknown password error",
        );
      else {
        console.log(err);
        setPasswordError("Something failed! Try updating password later!!");
      }
    }
  }

  return (
    <Box
      component={"main"}
      className="w-full gap-2 flex py-2"
      sx={{ background: "#011611", height: { xs: "max-content", md: "92.4dvh" } }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: "100%" }}
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
          <Stack
            component={"section"}
            className="border border-gray-300 w-full p-2 m-2 rounded-xl shadow-2xs gap-12 items-center"
            direction={"row"}
          >
            {imageError && (
              <Alert severity="error">
                {imageError}
                <IconButton color="secondary" onClick={() => setImageError("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            <Box
              className="w-30 h-30 rounded-full bg-transparent shadow relative z-0"
              sx={{ borderRadius: "50%" }}
            >
              <CardMedia
                component={"img"}
                image="../../meDefault.png"
                className="h-30 max-w-30 rounded-full"
              />
              <IconButton
                onClick={handleCallHiddenInput}
                title="Update Profile Photo"
                className="w-10 h-10 z-50 bottom-[.4rem]"
                sx={{
                  bgcolor: "#6d28d9",
                  color: "#f9fafb",
                  right: "-.5rem",
                  position: "absolute",
                  "&:hover": {
                    bgcolor: "oklch(52.7% 0.265 303.9)",
                  },
                  border: ".3rem solid #e5e7eb",
                }}
              >
                <Edit />
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  ref={fileInputRef}
                />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="body1" gutterBottom>
                {" "}
                <strong>
                  <i>Name:</i>
                </strong>{" "}
                {data?.firstName} {data?.lastName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {" "}
                <strong>
                  <i>Username:</i>
                </strong>{" "}
                {data?.userName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {" "}
                <strong>
                  <i>Emali:</i>
                </strong>{" "}
                {data?.emailAddress}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Stack direction={{ xs: "column", md: "row"}} ml={{md: "6rem" }} className="p-4" gap={8}>
          <Stack component={"section"} 
            className="border-2 border-gray-300 rounded-xl shadow p-2 gap-6 h-max">
           <Box component={"div"} className="pl-2">
              <Typography variant="h6" fontWeight={"bold"} color="secondary">
                <Settings/> Profile Settings 
              </Typography>
              <Typography variant="body2" gutterBottom>
                Choose a Settings Action below
              </Typography>
           </Box>
           <Stack direction={{md: "row"}}>
              <Button color="secondary" variant="contained" size="large"
                sx={{m: 1, borderRadius: ".5rem"}}
                startIcon={<Person/>}
                disabled={profSetting}
                onClick={() => setProfSetting(true)}
              >
                Update Your Profile Info
              </Button>
              <Button color="warning" variant="outlined" size="large"
                startIcon={<Password/>}
                disabled={!profSetting}
                onClick={() => setProfSetting(false)}
                sx={{m: 1, borderRadius: ".5rem", borderWidth: "2px", borderColor: "#ed6c02"}}
              >
                Change Your Password
              </Button>
           </Stack>
          {profSetting? <Box
            component={"form"}
            onSubmit={handleUpdateUserInfo}
            className="bg-red border border-gray-300 p-6
            flex flex-col items-center shadow rounded-2xl border-r-2 border-r-purple-600 min-w-[35%]"
            sx={{ bgcolor: "#fff" }}
            gap={1}
          >
            {error && (
              <Alert
                severity="error"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "25rem",
                }}
              >
                {error}{" "}
                <IconButton color="error" onClick={() => setError("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            {success && (
              <Alert
                severity="success"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "25rem",
                }}
              >
                {success}{" "}
                <IconButton color="primary" onClick={() => setSuccess("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            <Typography
              variant="h6"
              fontWeight={"bold"}
              gutterBottom
              className="self-start pb-4"
              color="secondary"
            >
              Update Your Profile
            </Typography>
            <TextField
              label="First name"
              sx={{ bgcolor: "transparent", px: ".5rem" }}
              className="rounded-2xl"
              fullWidth
              variant="standard"
              color="secondary"
              required
              onChange={handleFirstName}
              value={state.firstName}
            />
            <TextField
              label="Last name"
              sx={{
                bgcolor: "transparent",
                m: ".5rem",
                borderRadius: "2rem",
                px: ".5rem",
              }}
              fullWidth
              variant="standard"
              color="secondary"
              required
              onChange={handlLastName}
              value={state.lastName}
            />
            <TextField
              label="Username"
              sx={{
                bgcolor: "transparent",
                m: ".5rem",
                borderRadius: "2rem",
                px: ".5rem",
              }}
              fullWidth
              variant="standard"
              color="secondary"
              required
              onChange={handleUserName}
              value={state.userName}
            />
            <TextField
              label="Email"
              sx={{
                bgcolor: "transparent",
                m: ".5rem",
                borderRadius: "2rem",
                px: ".5rem",
              }}
              fullWidth
              variant="standard"
              color="secondary"
              required
              onChange={handleEmail}
              value={state.emailAddress}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className="self-start"
              loading={isPending}
            >
              Save Changes
            </Button>
          </Box> :
          <Box
            component={"form"}
            onSubmit={handleUpdateUserPassword}
            className="bg-red border border-gray-300 p-6
            flex flex-col items-center shadow rounded-2xl border-l-2 border-l-orange-500 min-w-[30%]"
            sx={{ bgcolor: "#fff" }}
            gap={2}
          >
            {passwordError && (
              <Alert
                severity="error"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "25rem",
                }}
              >
                {passwordError}{" "}
                <IconButton color="error" onClick={() => setPasswordError("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            {successPass && (
              <Alert
                severity="success"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "25rem",
                }}
              >
                {successPass}{" "}
                <IconButton color="primary" onClick={() => setSuccessPass("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            <Typography
              variant="h6"
              fontWeight={"bold"}
              gutterBottom
              className="self-start pb-4"
              color="warning"
            >
              Set A new password
            </Typography>
            <PasswordInput
              label="Current Password"
              value={currentPassword}
              onChange={handleCurrentPassword}
              v="#e65100"
              variant="standard"
            />
            <PasswordInput
              label="New Password"
              value={newPassword}
              onChange={handleNewPassword}
              v="#e65100"
              variant="standard"
            />
            <Button
              type="submit"
              variant="contained"
              color="warning"
              className="self-start"
              loading={passPending}
            >
              Change password
            </Button>
          </Box>}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ProfilePage;
