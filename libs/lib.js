/**
 * 函式
 */
function Lib()
{
    function getCountDownDate(today)
    {
        var today = today || new Date();
        var mouWorkDay = new Date('4/1/2019');
        var diffTime = Math.abs(today.getTime() - mouWorkDay.getTime());
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return diffDays;
    }

    return {
        getCountDownDate : getCountDownDate
    }
}
module.exports = new Lib();