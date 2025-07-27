type NoteType = {
    id: string, 
    title: string, 
    synopsis: string,
    content: string,
    lastUpdated: string | Date, 
    creator: string,
    dateCreated: string | Date, 
    isPublic: boolean,
    isPinned: boolean
}

export default function filterOldTrashNotes (trashNotes: NoteType[]) : NoteType[] | []  {
    return trashNotes.filter(trashNote => {
        const deletionDate = new Date(trashNote.lastUpdated).getTime();
        const today = new Date().getTime();
        const daysInTheTrash = (today - deletionDate) / (1000 * 60 * 60 * 24)
        return daysInTheTrash < 30;
    })
}