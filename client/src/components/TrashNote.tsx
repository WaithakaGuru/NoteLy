import { Restore, Person, Topic, } from "@mui/icons-material"
import {Button, Typography, Chip, Stack } from "@mui/material"
import type { NoteType } from "../utils/Note.type"
import getDateString from "../utils/dateFormatter"
import {useGeneric} from "../services/patchRequests"
import { isAxiosError } from "axios"
import { client } from "../main"

function TrashNote(trashNoteData: NoteType ) {
    const id = trashNoteData.id
    const {mutateAsync: restoreTrashNote, isPending} = useGeneric(id, "RestoreTrashNote", "/note/restore/");
    async function handleRestoreTrashNote() {
        try{
            const restored = await restoreTrashNote({});
            if(restored){
                client.invalidateQueries({queryKey: ["GetTrashNotes"]});
            }
        }catch(err){
            if(isAxiosError(err)) {
                console.log(err.response?.data.message);
            }
            else{
                console.log(err);
            }
        }
    }

    return (
     <Stack  sx={{width: {xs: "30rem", sm: "23.8rem"}}}
        className="bg-[#f9f9f9] w-[24rem] p-4 items-left gap-4 shadow-xl min-h-84 border-gray-300 border rounded-xl justify-center"
    >
        <Typography
            variant="h6"
            className="text-purple-400 flex justify-between h-16 overflow-y-hidden line-through"
            fontWeight={600}
            sx={{textDecoration: "strike"}}
        >
          {trashNoteData.title}
        <Chip
            component={"div"}
            label="Public"
            sx={{ bgcolor: "limegreen", color: "#f9f9f9" }}
        />
        </Typography>
        <Typography
        variant="body2"
        className="text-gray-600"
        mb={"-1rem"}
        align="left"
        >
        <Topic /> Business{" "}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
        <Person /> {trashNoteData.NoteCreator?.lastName} {trashNoteData.NoteCreator?.userName}
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
         {trashNoteData.synopsis}
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
          Deleted: {getDateString(trashNoteData.lastUpdated)}
        </Typography>
        <Button
            color="secondary"
            startIcon={<Restore />}
            sx={{ bgcolor: "#f0e5ff", textTransform: "none" }}
            title="Restore this note"
            loading={isPending}
            onClick={handleRestoreTrashNote}
        >
            Restore
        </Button>
        
        </Stack>
    </Stack>
)
}

export default TrashNote