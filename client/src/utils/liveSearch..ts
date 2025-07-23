import type { NoteType } from "./Note.type";

function liveSearch(notes: NoteType[], searchString: string) {
    const cleanSearchString = searchString.trim();
    if(!cleanSearchString) return notes;

    const result = notes.filter(note => {
        note.title.includes(cleanSearchString)
    })

    return result;
}
export default liveSearch;