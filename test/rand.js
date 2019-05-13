const should = require('should');
const rand = require('../libs/rand');

describe('#libs/rand', () => {
    // 從陣列隨機抽出 1 個值
    it('從陣列隨機抽出 1 個值', done => {
        const v = rand.getFromArray([1, 2, 3, 4]);
        // console.log(v);
        v.should.Number();
        done();
    });

    it('隨機出 1 個不超過最大值的值', done => {
        const v = rand.getValue(999);
        // console.log(v);
        v.should.Array();
        done();
    });

    it('隨機出 5', done => {
        const v = rand.getFromArray([5, 5, 5]);
        // console.log(v);
        v.should.Number();
        v.should.eqls(5);
        done();
    });

    it('取得上下限中隨機的一個數字', done => {
        const v = rand.getNumber(1, 1);
        v.should.Number();
        v.should.eqls(1);
        done();
    });
});