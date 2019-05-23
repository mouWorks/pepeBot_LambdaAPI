const should = require('should');
const lib = require('../libs/lib');
const miment = require('miment');

describe('#libs/rand', () => {
    // 倒數計時
    it('Mou 倒數測試 2019-04-02 應為 2', done => {
        var today = "2019-04-02";
        let v = lib.getCountDownDate(today);
        v.should.eqls(2);
        done();
    });

    it('Mou 倒數測試應大於 1', done => {
        let v = lib.getCountDownDate();
        v.should.Number();
        v.should.greaterThan(1);
        done();
    });
});