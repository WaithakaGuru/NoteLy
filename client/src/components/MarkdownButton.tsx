import { Button, Tooltip } from "@mui/material"
import type { ReactNode } from "react"

type ButtonType  ={
    icon?: ReactNode,
    title: string,
    font?: string,
    info?: string,
    style?: string,
    bold?: boolean,
    before: string,
    after?: string,
    onInsert: (before: string, after: string) => void,
    Ref: React.RefObject<HTMLInputElement | null > | null;
}

function MarkdownButton({
    title,
    icon,
    info,
    onInsert,
    before, after = "", 
    bold= false,
    font= "Montserrat",
    style="normal"
    } : ButtonType) {
   
  return (
    <Tooltip title={title}>
    <Button
        onClick={()=>onInsert(before, after)}
        sx={{fontFamily: font, fontStyle: style, fontSize: "1rem",
            fontWeight: bold? "bold": "",
            minWidth: "3rem",
            padding: ".5rem",
            placeSelf: "center",
            maxWidth: '4rem',
        }}
    >
        {icon? icon : info}
    </Button>
    </Tooltip>
        
  )
}

export default MarkdownButton