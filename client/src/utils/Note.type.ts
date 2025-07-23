export type NoteType = {
    id: string,
    title: string,
    synopsis: string,
    isPublic: boolean,
    isPinned: boolean, 
    dateCreated: string
    NoteCreator: {
        id: string
        firstName: string
        lastName: string,
        userName: string
    }
}