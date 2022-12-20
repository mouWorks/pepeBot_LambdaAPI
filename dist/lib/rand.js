"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomHand = exports.getNumber = exports.getValue = exports.getFromArray = void 0;
function getFromArray(ArrayNames) {
    let length = ArrayNames.length;
    return ArrayNames[Math.floor(Math.random() * length)];
}
exports.getFromArray = getFromArray;
function getValue(limit) {
    return [Math.floor(Math.random() * limit)];
}
exports.getValue = getValue;
function getNumber(lower_limit, upper_limit) {
    let diff = upper_limit - lower_limit;
    return lower_limit + Math.floor(Math.random() * diff);
}
exports.getNumber = getNumber;
function getRandomHand() {
    const handArray = ['👈', '👆', '👉'];
    let length = handArray.length;
    return handArray[Math.floor(Math.random() * length)];
}
exports.getRandomHand = getRandomHand;
//# sourceMappingURL=rand.js.map