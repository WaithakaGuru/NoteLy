import { Chip, Typography, Box, Divider } from "@mui/material"
import Markdown from "react-markdown"

type MarkdownContent = {
    state: {
        title: string,
        synopsis: string,
        content: string
    },
    visibility: string
}

function MarkdownPreview(info: MarkdownContent) {
  return (
     <Box component={"section"} className="border border-gray-300 
                rounded bg-white p-4 m-1 gap-2 flex flex-col shadow-md min-h-[34rem]" 
    > 
        <Typography variant="body1" gutterBottom fontWeight={"bold"} fontStyle={"italic"} color="secondary">
            Visibility:   { <Chip
            component={"div"}
            label={info.visibility==="public"? "Public" : "Private"}
            sx={{ bgcolor: info.visibility==="public" ? "limegreen": "slategrey", color: "#f9f9f9" }}
            />}
        </Typography>

        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Title:
        </Typography>
        <Markdown>
            {info.state.title || "No title written yet!!"}
        </Markdown>

        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Synopsis:
        </Typography>
        <Markdown>
            {info.state.synopsis || "No synopsis writen yet!!"}
        </Markdown>

        <Divider flexItem/>

        <Typography variant="body1" fontWeight={"bold"} fontStyle={"italic"} gutterBottom color="secondary">
            Content:
        </Typography>
        <Markdown>
            {info.state.content || "No content written yet !!"}
        </Markdown>
    </Box>
  )
}

export default MarkdownPreview