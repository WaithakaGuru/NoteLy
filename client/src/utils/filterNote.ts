import type { NoteType } from "./Note.type";

export function filterPublic(notes: NoteType[]): NoteType[] | [] {
  return notes.filter((note) => note.isPublic);
}

export function filterPinned(notes: NoteType[]): NoteType[] | [] {
  return notes.filter((note) => note.isPinned);
}
