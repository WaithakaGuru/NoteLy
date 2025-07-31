import {useState} from "react"
import { Code, FormatListBulletedAdd, FormatListNumbered, Create,
  FormatQuote, Image, Link, List, Preview, Terminal, 
  StrikethroughS,
  Title} from "@mui/icons-material";
import { Box, IconButton, Stack, Tooltip } from "@mui/material";
import MarkdownButton from "./MarkdownButton";

type MDEditor = {
  handleWrite : () => void,
  handlePreview: () => void,
  insert: (before: string, after: string) => void
  Ref: React.RefObject<HTMLInputElement | null> |null
}


function MkEditor({handleWrite, handlePreview, insert, Ref}: MDEditor) {
  const [show, setShow] = useState(false);

  return (
    <Stack direction={"row"} className="w-[100%] border border-gray-300 rounded bg-gray-100">
      <Box component={"div"} className="flex gap-2 h-11 pr-1 items-center">
        <Tooltip title="Continue writing">
            <IconButton disabled={!show? true : false} color="primary"
            className="h-full"
              onClick={()=> {
                handleWrite()
                setShow(false);
              }}
            >
              <Create/>
            </IconButton>
        </Tooltip>
        <Tooltip title="Preview your work">
          <IconButton  disabled={show? true : false} color="secondary"
            onClick={()=>{
              handlePreview()
              setShow(true)
            }}
            className="h-full">
            <Preview/>
          </IconButton>
        </Tooltip>
      </Box>
      <Stack className="mb-2 w-[100%] overflow-auto
        bg-gray-200 scroll-none" 
        direction={"row"} 
      >
        <MarkdownButton onInsert={insert} title="Insert a heading" icon={<Title/>} before={`\n## `} Ref={Ref}/>
        <MarkdownButton onInsert={insert} title="Strike Through Text" icon={<StrikethroughS/>}  before="~~" after="~~" Ref={Ref}/>
        <MarkdownButton onInsert={insert} title="Bold Text" info="B" bold={true} before="**" after="**" Ref={Ref}/>
        <MarkdownButton onInsert={insert} title="Italic Text" info="I" bold={true} style="italic" font="cursive"  before="*" after="*" Ref={Ref}/>
        <MarkdownButton onInsert={insert} title="Insert a Blockquote"  before={`\n> `} Ref={Ref} icon={<FormatQuote/>}/>
        <MarkdownButton onInsert={insert} title="Insert a line of code" before="`" after="`" Ref={Ref} icon={<Terminal/>}/>
        <MarkdownButton onInsert={insert} title="Insert a block of code" before={`\n\`\`\` `} after="```" Ref={Ref} icon={<Code/>}/>
        <MarkdownButton onInsert={insert} title="Insert a link" before="[" after="](url)" Ref={Ref} icon={<Link/>}/>
        <MarkdownButton onInsert={insert} title="Insert an image" before="![" after="](imageUrl)" Ref={Ref} icon={<Image/>}/>
        <MarkdownButton onInsert={insert} title="Add an unordered list item" before={`\n- `} Ref={Ref} icon={<List/>}/>
        <MarkdownButton onInsert={insert} title="Add a numbered list item" before={`\n1. `} Ref={Ref} icon={<FormatListNumbered/>}/>
        <MarkdownButton onInsert={insert} title="Add a tasklist item" before={`-[] `} Ref={Ref} icon={<FormatListBulletedAdd/>}/>
      </Stack>
    </Stack>
  )
}

export default MkEditor