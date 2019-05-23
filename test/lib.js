const should = require('should');
const lib = require('../libs/lib');

describe('#libs/rand', () => {
    // 倒數計時
    it('Mou 倒數測試', done => {
        var today = new Date('4/2/2019');
        let v = lib.getCountDownDate(today);
        v.should.eqls(1);
        v = lib.getCountDownDate();
        v.should.Number();
        done();
    });
});