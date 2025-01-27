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
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const rand = __importStar(require("../lib/rand.js"));
const globals_1 = require("@jest/globals");
(0, globals_1.describe)(`Rand`, () => {
    (0, globals_1.describe)(`getFromArray`, () => {
        (0, globals_1.test)('從陣列隨機抽出 1 個值', () => {
            const v = rand.getFromArray([1, 2, 3, 4]);
            (0, globals_1.expect)(v).toEqual(globals_1.expect.any(Number));
        });
        (0, globals_1.test)('隨機出 5', () => {
            const v = rand.getFromArray([5, 5, 5]);
            (0, globals_1.expect)(v).toBe(5);
        });
    });
    (0, globals_1.describe)('getValue', () => {
        (0, globals_1.test)('隨機出 1 個不超過最大值的值', () => {
            const limit = 999;
            const v = rand.getValue(limit);
            (0, globals_1.expect)(v.length).toEqual(1);
            (0, globals_1.expect)(v[0]).toBeLessThan(limit);
        });
    });
    (0, globals_1.describe)(`getNumber`, () => {
        (0, globals_1.test)('取得上下限中隨機的一個數字', () => {
            const v = rand.getNumber(1, 1);
            (0, globals_1.expect)(v).toEqual(globals_1.expect.any(Number));
            (0, globals_1.expect)(v).toEqual(1);
        });
    });
});
//# sourceMappingURL=rand.js.map