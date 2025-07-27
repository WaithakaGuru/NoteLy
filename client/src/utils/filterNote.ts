import type { NoteType } from "./Note.type";

export function filterPublic(notes: NoteType[]) :  NoteType[] | [] {
    const publicNotes = notes.filter(note => note.isPublic);
    return publicNotes
}

export function filterPinned(notes: NoteType[]) : NoteType[] | []{
    const pinnedNotes = notes.filter(note => note.isPinned);
    return pinnedNotes;
}