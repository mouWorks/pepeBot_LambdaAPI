import * as lib from '../lib/lib'
import { describe, test, expect } from '@jest/globals'

describe(`Lib`, () => {
    describe(`getWorkedDate`, () => {
        test('Mou 倒數測試 2019-04-02 應為 2', () => {
            let today = '2019-04-02'
            let v = lib.getWorkedDate(today)
            expect(v).toEqual(2)
        })

        test('Mou 倒數測試應大於 1', () => {
            let v = lib.getWorkedDate()
            expect(v).toEqual(expect.any(Number))
            expect(v).toBeGreaterThan(1)
        })
    })

    describe('getTimeRemaining', () => {
        // 倒數計時
        test('倒數計時取得日期應大於等於0', () => {
            var deadline = 'January 6 2020 10:00:00 GMT+0800'
            let v = lib.getTimeRemaining(deadline)
            expect(v.days).toEqual(expect.any(Number))
            expect(v.days).toBeGreaterThan(0)
        })

        test('倒數計時取得過去時間type應為after', () => {
            var deadline = 'January 6 2020 10:00:00 GMT+0800'
            let v = lib.getTimeRemaining(deadline)
            expect(v.type).toEqual(`after`)
        })

        test('倒數計時取得未來時間type應為before', () => {
            var deadline = 'January 6 2040 10:00:00 GMT+0800'
            let v = lib.getTimeRemaining(deadline)
            expect(v.type).toEqual(`before`)
        })
    })
    describe('#libs/lib.recognizePeople', () => {
        test('取得 speaker', () => {
            let v = lib.recognizePeople('U2cdda2ee76097f9021bb68e70feffdb4')
            expect(v).toEqual('老豆')
        })
    })
})
