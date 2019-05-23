const miment = require('miment');

/**
 * 函式
 */
function Lib()
{
    function getCountDownDate(today)
    {
        var today = today || miment().format('YYYY-MM-DD');
        let diff_secs = miment(today + ' 00:00:00').diff('2019-04-01 00:00:00') / 1000;
        let diff_days = diff_secs / 86400;

        return diff_days + 1;
    }

    return {
        getCountDownDate : getCountDownDate
    }
}
module.exports = new Lib();