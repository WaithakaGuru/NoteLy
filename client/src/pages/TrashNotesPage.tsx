import { Stack, Box, Button, TextField, Typography, Alert } from '@mui/material'
import ToggleSideBar from '../components/ToggleSideBar'
import TrashNote from '../components/TrashNote'
import { Dashboard, Notes } from '@mui/icons-material'
import { useGetTrashNotes } from '../services/fetchRequests'
import NoTrash from '../components/NoTrash'
import { useEffect, useState } from 'react'
import liveSearch from '../utils/liveSearch.'
import type { NoteType } from '../utils/Note.type'

function TrashNotesPage() {
    const {data: trash} = useGetTrashNotes();
    const [data, setData] = useState(trash);

    useEffect(()=> {
        if(trash) setData(trash);
    }, [trash])

    function handleLiveSearch(e: React.ChangeEvent<HTMLInputElement>){
        const trashSearchResults = liveSearch(trash, e.target.value);
        setData(trashSearchResults);
    }

  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: {xs: "max-content"} }}
    >
        <ToggleSideBar/>
        <Stack
            component={"section"}
            className="bg-gray-50 w-full overflow-auto rounded p-4"
            sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh", md: "35rem"} }}
        >
            <Stack direction={{md:"row"}} className="justify-around min-w-1/2">
                <Box
                    component={"div"}
                    className="flex flex-col"
                >
                    <Typography
                    fontSize={"1.8rem"}
                    fontWeight={"bold"}
                    className="text-gray-700"
                    >
                    Trash Notes
                    </Typography>
                
                    <Typography
                        variant="body2"
                        gutterBottom
                        className="text-gray-600"
                    >
                        Review and restore previously deleted notes
                    </Typography>
                </Box>
                <Stack direction={"row"} gap={1} p={1}>
                    <Button
                    href="/dashboard/note"
                    color="secondary"
                    variant="contained"
                    startIcon={<Notes />}
                    sx={{
                        my: ".5rem",
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}
                    className="w-38 text-gray-50 text-nowrap"
                    title="Write a new note"
                    >
                    My notes
                    </Button>
                
                    <Button
                    href="/dashboard"
                    color="success"
                    startIcon={<Dashboard className="mr-[-.5rem]" />}
                    variant="outlined"
                    title="Go to Dashboard"
                    sx={{
                        my: ".5rem",
                        textTransform: "none",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                    }}
                    className="w-32 text-gray-50 text-nowrap"
                    >
                    Dashboard
                    </Button>
                </Stack>
                <TextField
                    className="min-w-fit w-80"
                    label="Search for notes"
                    onChange={handleLiveSearch}
                    sx={{ my: 1, borderRadius: "1rem" }}
                />
            </Stack>
            <Alert severity='warning' >
                Item in trash will be permanently deleted after 30 day. Restore a note if youneed to.
            </Alert>
            <Box component={"section"} className="w-full p-2 mt-4">
            <Typography
                variant="h6"
                className="text-gray-700"
                sx={{ mb: 2 }}
                fontWeight={"bold"}
                fontSize={"2rem"}
            >
                Recently deleted Notes ({data?.length})
            </Typography>
            <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
                {data?.length === 0 && <NoTrash/>}
               { data?.map((note: NoteType) => 
                    <TrashNote {...note} />
                )}
            </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default TrashNotesPage