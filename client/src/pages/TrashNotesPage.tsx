import { Stack, Box, Button, TextField, Typography, Alert, IconButton } from '@mui/material'
import ToggleSideBar from '../components/ToggleSideBar'
import TrashNote from '../components/TrashNote'
import { Dashboard, Notes, West } from '@mui/icons-material'
import { useGetTrashNotes } from '../services/fetchRequests'
import NoTrash from '../components/NoTrash'
import { useEffect, useState } from 'react'
import liveSearch from '../utils/liveSearch.'
import type { NoteType } from '../utils/Note.type'
import { filterPinned, filterPublic } from '../utils/filterNote'

function TrashNotesPage() {
    const {data: trash} = useGetTrashNotes();
    const [noteTitle, setNoteTitle] = useState("Recently deleted Notes")
    const [goBackHidden, setGoBackHidden] = useState(true);
    const [showAllNotes, setShowAllNotes] = useState(false);
    const [data, setData] = useState(trash);

    useEffect(()=> {
        if(trash) setData(trash);
    }, [trash, showAllNotes])

    function handleShowAllNotes() {
        setGoBackHidden(true);
        setShowAllNotes(true);
    }
    
    function handleFilterPublicNotes(){
        setData(filterPublic(data));
        setGoBackHidden(false);
    }
    function handleFilterPinnedNotes(){
        setData(filterPinned(data));
        setGoBackHidden(false);
    }

    function handleLiveSearch(e: React.ChangeEvent<HTMLInputElement>){
        const val = e.target.value;
        val.trim()? setNoteTitle("Search Results") : setNoteTitle("Recently deleted Notes");
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
            <Alert severity='warning' sx={{fontWeight: "bold"}} >
                Item in trash will be permanently deleted after 30 day. Restore a note if you need to.
            </Alert>
            <Box component={"section"} className="w-full p-2 mt-4">
            <Typography
                variant="h6"
                className="text-gray-700"
                sx={{ mb: 2 }}
                fontWeight={"bold"}
                fontSize={"2rem"}
            >
              <IconButton color='warning' title='See All Notes' hidden={goBackHidden} onClick={handleShowAllNotes}> <West/></IconButton> {noteTitle} ({data?.length})
            </Typography>
            <Stack direction={"row"} className="justify-left gap-2 flex-wrap">
                {data?.length === 0 && <NoTrash/>}
               { data?.map((note: NoteType) => 
                    <TrashNote {...note} key={note.id}/>
                )}
            </Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default TrashNotesPage