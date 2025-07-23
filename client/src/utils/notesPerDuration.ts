import {type  NoteType } from "./Note.type";

type NoteCountType = {
    today: number,
    week: number,
    month: number
}

export default function getNotesPerDuration(notes: NoteType[]) : NoteCountType {
    let result = { today: 0, week: 0, month: 0};

    notes.forEach(note => {
        const dateInMs = new Date(note.dateCreated).getMilliseconds();
        const currentDateInMs = new Date().getMilliseconds();

        const differenceInDays = (currentDateInMs - dateInMs) / (1000 * 60 * 60 *24);

        if(differenceInDays < 1){
            result.today++;
            result.week++;
            result.month++;
        } 
        else if(differenceInDays >= 1 && differenceInDays < 7 ){
            result.week++
            result.month++
        }
        else if(differenceInDays >= 7 && differenceInDays < 31 ){
            result.month++
        }
    });
    return result
}