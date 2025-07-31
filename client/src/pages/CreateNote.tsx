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
import { Cancel, Dashboard, Delete, Notes} from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownGuide from "../components/MarkdownGuide";
import { useReducer, useRef, useState } from "react";
import MarkdownPreview from "../components/MarkdownPreview";
import { isAxiosError } from "axios";
import { useCreateNote } from "../services/postRequests";
import MkEditor from "../components/MkEditor";


type StateType = {
  title: string;
  synopsis: string;
  content: string;
};

type InputAction = {
  type: "input";
  vals: {
    component: keyof StateType; 
    value: string;
  };
};

type InsertAction = {
  type: "insert";
  payload: {
    component: keyof StateType;
    before: string;
    after?: string;
    ref: React.RefObject<HTMLInputElement | null>;
  };
};

type ActionType = InputAction | InsertAction;


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
    case "insert":
      const { component, before, after } = action.payload;
      const ref = action.payload.ref?.current;
      if (!ref) return state;

      const start = ref.selectionStart ?? 0;
      const end = ref.selectionEnd ?? 0;
      const selected = state[component].substring(start, end);
      const newText =
        state[component].substring(0, start) +
        before +
        selected +
        after +
        state[component].substring(end);
  
      setTimeout(() => {
        ref.focus();
        const cursorPos = start + before.length;
        ref.setSelectionRange(cursorPos, cursorPos + selected.length);
      }, 0);

      return {
        ...state,
        [component]: newText,
      };

    default: 
      return state;
}
}

function CreateNote() {
  const [visibility, setVisibility] = useState<"public" | "private">("public");
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);
  const [preview, setPreview] = useState(false);

  const { mutateAsync: createNote, isPending } = useCreateNote();
  const isPublic = visibility === "public" ? true : false;
  
  const titleRef = useRef<HTMLInputElement>(null);
  const synopsisRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const [currentRef, setCurentRef] = useState <React.RefObject<HTMLInputElement  | null> | null>(null);

  const [state, alter] = useReducer(reducerFunc, {
    title: "",
    synopsis: "",
    content: "",
  });

  async function handleCreateNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newNoteData = { ...state, isPublic };
    try {
      const newNote = await createNote(newNoteData);
      if (newNote) {
        setHide(false);
        setError("");
      }
    } catch (err) {
      setHide(true);
      if (isAxiosError(err)) {
        setError(err.response?.data.message);
      } else {
        console.log(err);
        setError("Something went wrong!!");
      }
    }
  }
  
  function handleVisibility(e: SelectChangeEvent) {
    setVisibility(e.target.value as "public" | "private");
  }
  
  function handlePreview() {
    setPreview(!preview)
  }
  function handleWrite() {
    setPreview(!preview)
  }

  function insertAtCursor(before: string, after="") {
    const ref = currentRef?.current;
    if (!ref) return;

    let component: "title" | "synopsis" | "content" = "title";

    if (ref === titleRef.current) component = "title";
    else if (ref === synopsisRef.current) component = "synopsis";
    else if (ref === contentRef.current) component = "content";

    alter({
      type: "insert",
      payload: { component, before, after, ref: currentRef },
    });
  }

  return (
    <Box
      component={"main"}
      className="w-full gap-2 flex h-[36rem] py-2"
      sx={{ background: "#011611", height: { xs: "max-content", md: "92.4dvh" } }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height:"100%"}}
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
                className="flex items-center justify-around w-full ml-[-2rem]"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700 "
                >
                  Create A new page
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Write down you thoughts, ideas or lessons
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
          className="w-full p-2 items-center flex  mb-12 border-2 border-gray-400 mx-auto my-6 rounded-2xl"
          sx={{ flexDirection: "column", width: {xs: "95%", md: "75%"}}}
        > 
          <MkEditor handlePreview={handlePreview} handleWrite={handleWrite} Ref={currentRef} insert={insertAtCursor}/>
           {!preview? <Stack
            fontFamily={"cursive"}
            className="min-w-[55%]"
            sx={{ width:"100%" }}
          >
            {error && <Alert severity="error">{error} 
                <IconButton color="error"
                  title="Hide this alert"
                  onClick={() => setError("")}
                  >
                  <Cancel/>
                </IconButton>
              </Alert>
            }
            {
              !hide && <Alert
              severity="success"
              className="flex items-center"
              id="success"
              >
              Note successfully created :)
              <IconButton 
                color="success"
                onClick={() => setHide(!hide)}
                className="relative right-0"
                title="Hide this alert"
                sx={{ position: "relative", right: 0 }}
                >
                <Cancel />
              </IconButton>
            </Alert>}
            <Stack
              component={"form"}
              onSubmit={handleCreateNote}
              className="bg-white border border-gray-300 p-4 m-1 gap-2 rounded shadow-md"
              >
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
              <TextField
                required
                sx={{ my: ".4rem" }}
                label="Enter a title for your notes"
                value={state.title}
                inputRef={titleRef}
                onFocus={() => setCurentRef(titleRef)}
                fullWidth
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
                inputRef={synopsisRef}
                onFocus={() => setCurentRef(synopsisRef)}
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
                inputRef={contentRef}
                onFocus={() => setCurentRef(contentRef)}
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
              <Button
                type="submit"
                variant="contained"
                disabled={!hide}
                color="secondary"
                size="large"
                loading={isPending}
              >
                Create Note
              </Button>
            </Stack>
          </Stack> :
          <Stack

            className="bg-gray-50"
            fontFamily={"cursive"}
            sx={{ width: { xs: "100%" }}}
          >
            <Typography
              variant="h6"
              className="text-gray-700"
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              ml={2}
            >
              Live preview your work
            </Typography>
            <MarkdownPreview state={state} visibility={isPublic} />
          </Stack> }
        </Box>
      </Stack>
    </Box>
  );
}

export default CreateNote;
