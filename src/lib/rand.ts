export function getFromArray(ArrayNames: any[]) {
    let length = ArrayNames.length
    return ArrayNames[Math.floor(Math.random() * length)]
}

export function getValue(limit: number): number[] {
    return [Math.floor(Math.random() * limit)]
}

export function getNumber(lower_limit: number, upper_limit: number) {
    let diff = upper_limit - lower_limit
    return lower_limit + Math.floor(Math.random() * diff)
}

export function getRandomHand() {
    const handArray = ['👈', '👆', '👉']
    let length = handArray.length
    return handArray[Math.floor(Math.random() * length)]
}
