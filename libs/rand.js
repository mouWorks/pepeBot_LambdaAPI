"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFromArray = getFromArray;
exports.getValue = getValue;
exports.getNumber = getNumber;
exports.getRandomHand = getRandomHand;
function getFromArray(ArrayNames) {
    let length = ArrayNames.length;
    return ArrayNames[Math.floor(Math.random() * length)];
}
function getValue(limit) {
    return [Math.floor(Math.random() * limit)];
}
function getNumber(lower_limit, upper_limit) {
    let diff = upper_limit - lower_limit;
    return lower_limit + Math.floor(Math.random() * diff);
}
function getRandomHand() {
    const handArray = ['👈', '👆', '👉'];
    let length = handArray.length;
    return handArray[Math.floor(Math.random() * length)];
}
//# sourceMappingURL=rand.js.map