import type { NoteType } from "./Note.type";

function liveSearch(notes: NoteType[], searchString: string) {
  const cleanSearchString = searchString.trim();
  if (!cleanSearchString) return notes;

  return notes.filter((note) =>
    note.title.toLowerCase().includes(cleanSearchString.toLowerCase()),
  );
}
export default liveSearch;
