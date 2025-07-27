import { Notes, PushPin} from "@mui/icons-material";
import {Button, Box, Stack, Typography, IconButton} from "@mui/material"
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownPreview from "../components/MarkdownPreview";
import { useGetSpecificNote } from "../services/fetchRequests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SingleNotePage() {
  const {id} = useParams();
  const {data} = useGetSpecificNote(id!);
  const [fullNote, setFullNote] = useState(data!)
    
  useEffect(()=>{
    if(data) setFullNote(data) 
  },[data] )

  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: {xs:"fit-content"} }}
    >
      <ToggleSideBar/>
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: {xs: "100dvh"} }}
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
                className="flex  w-full"
              >
                <Typography
                  fontSize={"1.8rem"}
                  fontWeight={"bold"}
                  className="text-gray-700"
                  align="left"
                >
                  Study Bay
                </Typography>
              </Box>
              <Typography
                variant="body2"
                gutterBottom
                className="text-gray-600"
              >
                Take time to read and review this note
              </Typography>
              <Stack direction={"row"} gap={1}>
                <Button
                  href="/dashboard/note"
                  color="secondary"
                  variant="contained"
                  startIcon={<Notes/>}
                  sx={{
                    my: "1rem",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  className="w-38 text-gray-50 text-nowrap"
                  title="Write a new note"
                >
                  My notes
                </Button>                
              </Stack>
            </Box>
          </Stack>
        </Box>
        <Box component={"section"} className="w-full p-2 mt-8">
          <Typography
            variant="h6"
            className="text-gray-700 flex justify-between"
            sx={{ mb: 2 }}
            fontWeight={"bold"}
            fontSize={"2rem"}
          >
            Detailed note <Box fontSize={"1rem"}> Pin this note <IconButton><PushPin/></IconButton></Box>
          </Typography>
          <MarkdownPreview state={fullNote} visibility={data?.isPublic}/>
        </Box>
      </Stack>
    </Box>
  )
}

export default SingleNotePage;
