import { Notes, PushPin, Delete, Edit } from "@mui/icons-material";
import { Button, Box, Stack, Typography, IconButton } from "@mui/material";
import ToggleSideBar from "../components/ToggleSideBar";
import MarkdownPreview from "../components/MarkdownPreview";
import { useGetSpecificNote } from "../services/fetchRequests";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { client } from "../main";
import { isAxiosError } from "axios";
import { useGeneric } from "../services/patchRequests";

function SingleNotePage() {
  const { id } = useParams();
  const { data } = useGetSpecificNote(id!);
  console.log(data);
  const [fullNote, setFullNote] = useState(data!);
  const { mutateAsync: pinNote } = useGeneric(
    data?.id,
    "PinNote",
    "/note/pin/",
  );

  useEffect(() => {
    if (data) setFullNote(data);
  }, [data]);

  async function handlePinNote() {
    try {
      const pinnedNote = await pinNote({ isPinned: fullNote.isPinned });
      if (pinnedNote) {
        client.invalidateQueries({
          queryKey: ["GetSpecificNote", fullNote.id],
        });
      }
    } catch (err) {
      if (isAxiosError(err)) console.log(err.response?.data.message);
      else console.log(err);
    }
  }

  return (
    <Box
      component={"main"}
      className="w-full h-[36rem] py-2 gap-2 flex"
      sx={{ background: "#011611", height: { xs: "fit-content" } }}
    >
      <ToggleSideBar />
      <Stack
        component={"section"}
        className="bg-gray-50 w-full h-[35rem] overflow-auto rounded p-4"
        sx={{ ml: { sm: "9rem" }, height: { xs: "100dvh", md: "35rem" } }}
      >
        <Box
          component={"section"}
          className="flex gap-4 border-b border-gray-300"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Stack direction={"row"} className="justify-between min-w-1/2">
            <Box>
              <Box component={"div"} className="flex  w-full">
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
                  startIcon={<Notes />}
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
                <Stack component={"div"} direction={"row"} gap={1}>
                  <Button
                    color="warning"
                    startIcon={<Delete className="mr-[-.5rem]" />}
                    variant="outlined"
                    sx={{
                      my: "1rem",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      display:
                        data?.creator === localStorage.getItem("userId")
                          ? "flex"
                          : "none",
                    }}
                    className="w-40 text-gray-50 text-nowrap"
                    title="Delete this note"
                  >
                    Move to Trash
                  </Button>
                  <Button
                    href={`/dashboard/update/${id}`}
                    color="success"
                    startIcon={<Edit className="mr-[-.5rem]" />}
                    variant="outlined"
                    title="Update this note"
                    sx={{
                      my: "1rem",
                      textTransform: "none",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      display:
                        data?.creator === localStorage.getItem("userId")
                          ? "flex"
                          : "none",
                    }}
                    className="w-28 text-gray-50 text-nowrap"
                  >
                    Update
                  </Button>
                </Stack>
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
            Detailed note{" "}
            <Box fontSize={"1rem"}>
              {" "}
              {data?.isPinned ? "Unpin this note" : "Pin this note"}
              <IconButton onClick={handlePinNote}>
                {data?.isPinned ? (
                  <PushPin className="text-lime-500" />
                ) : (
                  <PushPin />
                )}{" "}
              </IconButton>
            </Box>
          </Typography>
          <MarkdownPreview state={fullNote} visibility={data?.isPublic} />
        </Box>
      </Stack>
    </Box>
  );
}

export default SingleNotePage;
