export const floor2 = (num: number) => {
    return (
        ((Math.floor(Math.random() * (120 - 95)) + 95) / 100) *
        num
    ).toFixed(2)
}
