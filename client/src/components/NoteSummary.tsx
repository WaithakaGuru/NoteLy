import { Stack, IconButton, Typography, Chip, Button } from "@mui/material"
import { Edit, DeleteOutline, Person, Topic, PushPin, Visibility } from "@mui/icons-material"
import getDateString from "../utils/dateFormatter"
import type { NoteType } from "../utils/Note.type";
import useDeleteNote from "../services/deleteRequests";
import { isAxiosError } from "axios";
import { client } from "../main";

type FullNoteType = {noteData:NoteType , currentUserId: string};

function NoteSummary({noteData, currentUserId}: FullNoteType ) {
  const {mutateAsync: deletNote, isPending} = useDeleteNote(noteData.id)
  async function handleDeleteNote() {
    try{
      const deletedNote = await deletNote();
      if(deletedNote) {
        client.invalidateQueries({queryKey: ['GetAllNotes']})
      }
    }catch(err){
      if(isAxiosError(err)) console.log(err.response?.data.message);
      else console.log(err);
    }
  }

  return (
    <Stack sx={{width: {xs: "30rem", sm:"23.8rem"}}}
      className="w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center bg-white">
      <Typography
        variant="h6"
        className="text-gray-700 flex justify-between"
        fontWeight={600}
      >
       {noteData.title}
        <Chip
          component={"div"}
          label={noteData.isPublic? "Public" : "Private"}
          sx={{ bgcolor: noteData.isPublic? "limegreen": "slategrey", color: "#f9f9f9", mx: "2px" }}
        />
      </Typography>
      <Typography
        variant="body2"
        className="text-gray-600"
        mb={"-1rem"}
        align="left"
      >
        <Topic /> Study notes{" "}
        <IconButton title="Pin this note" sx={{ ml: 20 }}>
          <PushPin className="text-gray-500" />
        </IconButton>
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        <Person /> 
        {noteData.NoteCreator?.lastName} -  {noteData.NoteCreator?.userName}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textOverflow: "ellipsis",
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 3,
        }}
        gutterBottom
      >
        {noteData.synopsis}
      </Typography>
      <Stack
        direction={"row"}
        className="gap-2 border-t border-gray-300 p-2 pt-8 items-center"
      >
        <Typography
          variant="body2"
          fontSize={".7rem"}
          fontWeight={500}
          className="text-gray-600"
        >
          Posted {getDateString(noteData.dateCreated)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          startIcon={<Visibility />}
          title="See full blog"
          className="w-28"
          href={`/dashboard/note/${noteData.id}`}
        >
          View
        </Button>
        <Button
          color="secondary"
          startIcon={<Edit />}
          sx={{ bgcolor: "#f0e5ff", textTransform: "none", display:  
            noteData.creator === currentUserId ? "flex": "none"
            }} 
          href={`/dashboard/update/${noteData.id}`}
          title="Edit this note"
        >
          Edit
        </Button>
        <Button
          className= "p-[.4rem] rounded text-nowrap cursor-pointer w-29"
          title="Delete this note"
          disabled={false}
          onClick={handleDeleteNote}
          loading={isPending}
          style={{display:  
            noteData.creator === currentUserId ? "flex": "none", 
            color: "oklch(50.5% 0.213 27.518)",
            backgroundColor: "oklch(88.5% 0.062 18.334)"
            }}
        >
          <DeleteOutline /> Delete
        </Button>
      </Stack>
    </Stack>
  )
}

export default NoteSummary