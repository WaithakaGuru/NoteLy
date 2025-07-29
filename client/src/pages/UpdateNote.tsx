import {
  Stack,
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  type SelectChangeEvent,
  Alert,
  IconButton,
} from "@mui/material";
import { Cancel, Dashboard, Delete, Notes } from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownGuide from "../components/MarkdownGuide";
import { useEffect, useReducer, useState } from "react";
import MarkdownPreview from "../components/MarkdownPreview";
import { useGetSpecificNote } from "../services/fetchRequests";
import { useParams } from "react-router-dom";
import { isAxiosError } from "axios";
import { useGeneric } from "../services/patchRequests";
import { client } from "../main";

type ActionType = {
  type: string;
  vals: {
    value: string;
    component: string;
  };
};

type CreateNoteStateType = {
  title: string;
  synopsis: string;
  content: string;
};

const reducerFunc = (
  state: CreateNoteStateType,
  action: ActionType,
): CreateNoteStateType => {
  switch (action.type) {
    case "input":
      return { ...state, [action.vals.component]: action.vals.value };

    default:
      return state;
  }
};

function UpdateNote() {
  const { id } = useParams();
  const { data } = useGetSpecificNote(id!);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { mutateAsync: updateNote, isPending } = useGeneric(
    id!,
    "UpdateNote",
    "/note/",
  );

  const [state, alter] = useReducer(reducerFunc, {
    title: "",
    synopsis: "",
    content: "",
  });

  useEffect(() => {
    if (data) {
      alter({ type: "input", vals: { component: "title", value: data.title } });
      alter({
        type: "input",
        vals: { component: "synopsis", value: data.synopsis },
      });
      alter({
        type: "input",
        vals: { component: "content", value: data.content },
      });
    }
  }, [data]);

  const publicNote = data?.isPublic ? "public" : "private";
  const [visibility, setVisibility] = useState<"public" | "private" | string>(
    publicNote,
  );

  async function handleUpdateNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isPublic = visibility === "public" ? true : false;
    setError("");
    try {
      const updatedNote = await updateNote({ ...state, isPublic });
      if (updatedNote) {
        setSuccess(true);
        setError("");
        client.invalidateQueries({ queryKey: ["updateNote", id] });
      }
    } catch (err) {
      setSuccess(false)
      if (isAxiosError(err))
        setError(err.response?.data.message || "Unknown error");
      else {
        console.log(err);
        setError("Something went wrong!! Try upating later!");
      }
    }
  }

  function handleVisibility(e: SelectChangeEvent) {
    setVisibility(e.target.value as "public" | "private");
  }

  return (
    <Box
      component={"main"}
      className="w-full py-2 gap-2 flex"
      sx={{ background: "#011611", height: { xs: "max-content", md: "92.4dvh" } }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: "100%"}}
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
                className="flex items-center justify-around w-full ml-[-3rem]"
              >
                <Typography
                  fontSize={"1.7rem"}
                  fontWeight={"bold"}
                  className="text-gray-700"
                >
                  Update Your Note
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Perfect your notes add more Info
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
          <MarkdownGuide />
        </Box>
        <Box
          component={"section"}
          className="w-full p-2 flex items-start gap-6 my-12"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack
            fontFamily={"cursive"}
            sx={{ minWidth: { xs: "28rem", md: "45%" } }}
            width={"100%"}
            component={"div"}
            id="update"
          >
            <Typography
              variant="h6"
              className="text-gray-700"
              fontWeight={"bold"}
              fontSize={"1.35rem"}
              gutterBottom
            >
              Update this Note (Supports Markdown)
            </Typography>
            {error && (
              <Alert severity="error">
                {error}{" "}
                <IconButton color="warning" onClick={() => setError("")}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            {success && (
              <Alert severity="success">
                Note updated succesfully :){" "}
                <IconButton color="warning" onClick={() => setSuccess(false)}>
                  <Cancel />
                </IconButton>
              </Alert>
            )}
            <Stack
              component={"form"}
              onSubmit={handleUpdateNote}
              className="bg-white border border-gray-300 p-4 m-1 gap-2 rounded shadow-md"
            >
              <TextField
                required
                sx={{ my: ".4rem" }}
                label="Enter a title for your notes"
                value={state.title}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  alter({
                    type: "input",
                    vals: { component: "title", value: e.target.value },
                  })
                }
              />
              <TextField
                required
                sx={{ my: ".4rem" }}
                label="Write the synopsis of your notes"
                multiline
                minRows={3}
                value={state.synopsis}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  alter({
                    type: "input",
                    vals: { component: "synopsis", value: e.target.value },
                  })
                }
              />
              <TextField
                required
                sx={{ my: ".4rem" }}
                label="Write the content of your notes"
                multiline
                minRows={5}
                value={state.content}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  alter({
                    type: "input",
                    vals: { component: "content", value: e.target.value },
                  })
                }
              />
              <Typography variant="h6" color="warning">
                (Public notes are available to all Notely users)
              </Typography>
              <FormControl fullWidth size="small" required sx={{ my: ".4rem" }}>
                <InputLabel id="visibility-select-label">Visibility</InputLabel>
                <Select
                  required
                  labelId="visibility-select-label"
                  id="visibility-select"
                  value={visibility}
                  label="Visibility"
                  onChange={handleVisibility}
                >
                  <MenuItem value="public">Public</MenuItem>
                  <MenuItem value="private">Private</MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                loading={isPending}
              >
                Save changes
              </Button>
            </Stack>
          </Stack>
          <Stack
            className="bg-gray-50  min-w-[45%]"
            sx={{ minWidth: { xs: "28rem", md: "45%" } }}
          >
            <Typography
              variant="h6"
              className="text-gray-700"
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              gutterBottom
            >
              Live preview your work
            </Typography>
            <MarkdownPreview state={state} visibility={data?.isPublic} />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
export default UpdateNote;
