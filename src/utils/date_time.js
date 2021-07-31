export const getDate = ( date_string) =>{
    const  date = new Date(date_string)
    return `${date.getDate()} - ${date.getMonth()} - ${date.getFullYear()}`
}