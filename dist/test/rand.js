"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const rand = __importStar(require("../lib/rand.js"));
describe(`Rand`, () => {
    describe(`getFromArray`, () => {
        test('從陣列隨機抽出 1 個值', () => {
            const v = rand.getFromArray([1, 2, 3, 4]);
            expect(v).toEqual(expect.any(Number));
        });
        test('隨機出 5', () => {
            const v = rand.getFromArray([5, 5, 5]);
            expect(v).toBe(3);
        });
    });
    describe('getValue', () => {
        test('隨機出 1 個不超過最大值的值', () => {
            const limit = 999;
            const v = rand.getValue(limit);
            expect(v.length).toEqual(1);
            expect(v[0]).toBeLessThan(limit);
        });
    });
    describe(`getNumber`, () => {
        test('取得上下限中隨機的一個數字', () => {
            const v = rand.getNumber(1, 1);
            expect(v).toEqual(expect.any(Number));
            expect(v).toEqual(1);
        });
    });
});
//# sourceMappingURL=rand.js.map