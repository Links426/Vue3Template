export const getTime = (time: {
    getFullYear: () => number
    getMonth: () => number
    getDate: () => number
}) => {
    const year = time.getFullYear()
    const month = time.getMonth()
    const day = time.getDate()
    return { year, month, day }
}
