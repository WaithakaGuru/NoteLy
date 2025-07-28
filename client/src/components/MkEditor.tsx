import { useRef } from "react"
// import marked from "react-markdown"
function MkEditor() {
    const textAreaRef = useRef<HTMLTextAreaElement | undefined>(undefined);

    function insertAtCursor() {
        const textField = textAreaRef.current;
        if(!textField) return;
        
        const start = textField.selectionStart;
        const end = textField.selectionEnd;
        console.log(start, end);
    }
    insertAtCursor()

  return (
    <></>
  )
}

export default MkEditor