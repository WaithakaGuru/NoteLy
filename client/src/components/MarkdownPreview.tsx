import { Chip, Typography, Box, Divider } from "@mui/material"
import Markdown from "react-markdown"

type MarkdownContent = {
    state: {
        title: string,
        synopsis: string,
        content: string
    },
    visibility: boolean
}

function MarkdownPreview(info: MarkdownContent) {
  return (
     <Box component={"section"} sx={{minWidth: {xs: "28rem", sm: "98%"}, placeSelf: "center"}}
     className="border border-gray-300 rounded bg-white p-4 m-1 gap-2 flex flex-col shadow-md min-h-[34rem]" 
    > 
        <Box component={"div"}>
            <Typography variant="body1" gutterBottom fontWeight={"bold"} fontStyle={"italic"} color="secondary">
                Visibility:  
            </Typography>
             { <Chip
                label={info.visibility? "Public" : "Private"}
                sx={{ bgcolor: info.visibility ? "limegreen": "slategrey", color: "#f9f9f9" }}
                />}
        </Box>
        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Title:
        </Typography>
        <Markdown>
            {info?.state?.title || "No title written yet!!"}
        </Markdown>

        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Synopsis:
        </Typography>
        <Markdown>
            {info?.state?.synopsis || "No synopsis writen yet!!"}
        </Markdown>

        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Content:
        </Typography>
        <Markdown>
            {info?.state?.content || "No content written yet !!"}
        </Markdown>
    </Box>
  )
}

export default MarkdownPreview