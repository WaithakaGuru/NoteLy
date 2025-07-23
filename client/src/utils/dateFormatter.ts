export default function getDateString(dateString: string = "2025-07-24T10:15:00Z"){
    const date = new Date(dateString);

    const formattedDate = date.toLocaleDateString('en-Us', {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    return formattedDate
}
