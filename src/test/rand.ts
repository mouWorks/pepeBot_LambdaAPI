import * as rand from '../lib/rand.js'

describe(`Rand`, () => {
    describe(`getFromArray`, () => {
        test('從陣列隨機抽出 1 個值', () => {
            const v = rand.getFromArray([1, 2, 3, 4])
            expect(v).toEqual(expect.any(Number))
        })

        test('隨機出 5', () => {
            const v = rand.getFromArray([5, 5, 5])
            expect(v).toBe(5)
        })
    })
    describe('getValue', () => {
        test('隨機出 1 個不超過最大值的值', () => {
            const limit = 999
            const v = rand.getValue(limit)
            expect(v.length).toEqual(1)
            expect(v[0]).toBeLessThan(limit)
        })
    })

    describe(`getNumber`, () => {
        test('取得上下限中隨機的一個數字', () => {
            const v = rand.getNumber(1, 1)
            expect(v).toEqual(expect.any(Number))
            expect(v).toEqual(1)
        })
    })
})
