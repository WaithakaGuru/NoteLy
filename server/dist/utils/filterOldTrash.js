export default function filterOldTrashNotes(trashNotes) {
    return trashNotes.filter(trashNote => {
        const deletionDate = new Date(trashNote.lastUpdated).getTime();
        const today = new Date().getTime();
        const daysInTheTrash = (today - deletionDate) / (1000 * 60 * 60 * 24);
        return daysInTheTrash < 30;
    });
}
