import { FormatListBulletedAdd, FormatListNumbered, Link, List } from "@mui/icons-material";
import { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

export default function MarkdownEditor() {
  const [content, setContent] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Insert markdown syntax at cursor
  const insertAtCursor = (before: string, after: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const newText =
      content.substring(0, start) +
      before +
      selectedText +
      after +
      content.substring(end);

    setContent(newText);

    // Put cursor between the symbols
    setTimeout(() => {
      const cursorPos = start + before.length;
      textarea.setSelectionRange(cursorPos, cursorPos + selectedText.length);
      textarea.focus();
    }, 0);
  };

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {/* Toolbar */}
      <div className="col-span-2 flex gap-2 mb-2">
        <button
          onClick={() => insertAtCursor("**", "**")}
          className="px-2 py-1 border rounded"
        >
          <b>B</b>
        </button>
        <button
          onClick={() => insertAtCursor("*", "*")}
          className="px-2 py-1 border rounded"
        >
          <i>I</i>
        </button>
        <button
          onClick={() => insertAtCursor("`", "`")}
          className="px-2 py-1 border rounded font-mono"
        >
          `Code`
        </button>
        <button
          onClick={() => insertAtCursor(">")}
          className="px-2 py-1 border rounded font-mono"
        >
          quote
        </button>
        <button
          onClick={() => insertAtCursor("```", "```")}
          className="px-2 py-1 border rounded font-mono"
        >
            A Block of code
          {`<Code>`}
        </button>
        <button
          onClick={() => insertAtCursor("[", "](url)")}
          className="px-2 py-1 border rounded font-mono"
        >
            Link
         <Link/>
        </button>
        <button
          onClick={() => insertAtCursor("\n - ")}
          className="px-2 py-1 border rounded font-mono"
        >
            Unnumbered list
         <List/>
        </button>
        <button
          onClick={() => insertAtCursor("\n 1. ")}
          className="px-2 py-1 border rounded font-mono"
        >
         <FormatListNumbered/>
        </button>
        <button
          onClick={() => insertAtCursor("\n- [] ")}
          className="px-2 py-1 border rounded font-mono"
        >
            Task list
         <FormatListBulletedAdd/>
        </button>
      </div>

      {/* Editor */}
      <textarea
        ref={textareaRef}
        className="w-full h-96 p-2 border rounded resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your markdown here..."
      />

      {/* Preview */}
      <div className="w-full h-96 overflow-y-auto border rounded p-4 prose dark:prose-invert">
        <ReactMarkdown >{content}</ReactMarkdown>
      </div>
    </div>
  );
}
