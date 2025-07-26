import {Stack, Box, Typography, Button, TextField,FormControl, InputLabel, Select,
   MenuItem, type SelectChangeEvent,
   Alert} from "@mui/material"
import { Cancel, Dashboard, Delete, Notes} from "@mui/icons-material";
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownGuide from "../components/MarkdownGuide";
import { useReducer, useState } from "react";
import MarkdownPreview from "../components/MarkdownPreview";
import { isAxiosError } from "axios";
import { useCreateNote } from "../services/postRequests";

type ActionType = {
  type: "input",
  vals: {
    value: string,
    component: string
  }
}

type CreateNoteStateType = {
  title: string,
  synopsis: string,
  content: string,
}

const reducerFunc = (state: CreateNoteStateType, action: ActionType): CreateNoteStateType  => {
  if(action.type === "input") {
    return {...state, [action.vals.component] : action.vals.value}
  }
  return state
}


function CreateNote() {
  const [visibility, setVisibility] = useState<"public" | "private">('public');
  const [error, setError] = useState("");
  const [hide, setHide] = useState(false)
  const [state, alter] = useReducer(reducerFunc, {
    title: "", synopsis: "", content: ""
  })
  const {mutateAsync: createNote, isPending} = useCreateNote();
  const isPublic = visibility === "public" ? true : false;

  async function handleCreateNote(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const newNoteData = {...state, isPublic};
    try{
      const newNote = await createNote(newNoteData);
      if(newNote){
        setHide(false)
      }
    }catch(err){
      if(isAxiosError(err)) {
        setError(err.response?.data.message)
      }
      else{
        console.log(err);
        setError("Something went wrong!!")
      }
    }
  }


  function handleVisibility(e: SelectChangeEvent) {
    setVisibility(e.target.value as "public"|"private")
  }

  return (
  <Box
      component={"main"}
      className="w-full gap-2 flex h-[36rem] py-2"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
      <ToggleSideBar/>
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
          <MarkdownGuide/>                   
        </Box>
        <Box component={"section"} className="w-full p-2 items-center flex gap-6 my-12"  sx={{flexDirection: {xs: "column", md: "row"}}}>
          <Stack fontFamily={"cursive"} className="min-w-[55%]" sx={{width: {xs: "100%", md: "50%"}}}>
            <Typography
              variant="h6"
              className="text-gray-700"
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              gutterBottom
            >
              Write a new Note (use Markdown)
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            <Alert severity="success" hidden={hide} className="flex items-center"
              id="success"
            > 
                Note successfully created :) 
                <Button onClick={()=> setHide(!hide)} 
                  className="relative right-0" sx={{position: "relative", right: 0}}
                >
                  <Cancel/>
                </Button>
              </Alert>
            <Stack component={"form"} onSubmit={handleCreateNote}  
              className="bg-white border border-gray-300 p-4 m-1 gap-2 rounded shadow-md" >
              <TextField required sx={{my: ".4rem"}} label="Enter a title for your notes"  
                value={state.title} fullWidth
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  alter({type: "input", vals: {component: "title", value:e.target.value}})
                }
              />
              <TextField required sx={{my: ".4rem"}} label="Write the synopsis of your notes" multiline minRows={3} 
                value={state.synopsis} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  alter({type: "input", vals: {component: "synopsis", value:e.target.value}})
                }
              />
              <TextField required sx={{my: ".4rem"}} label="Write the content of your notes" multiline minRows={5} 
                value={state.content}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  alter({type: "input", vals: {component: "content", value:e.target.value}})
                }
              />
              <Typography variant="h6" color="warning">
                (Public notes are available to all Notely users) 
              </Typography>
              <FormControl fullWidth size="small" required sx={{my: ".4rem"}}>
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
              <Button type="submit" variant="contained" disabled={!hide}
                color="secondary"  size="large" loading={isPending} href="#success"
              >
                Create Note
              </Button>
            </Stack>
          </Stack>
          <Stack className="bg-gray-50" sx={{width: {xs: "100%", md: "50%"}}}> 
            <Typography
              variant="h6"
              className="text-gray-700"
              fontWeight={"bold"}
              fontSize={"1.5rem"}
              gutterBottom
            >
              Live preview your work
            </Typography>
            <MarkdownPreview state={state} visibility={visibility}/>
          </Stack>
        </Box>
      </Stack>
    </Box>
    )
}

export default CreateNote;
