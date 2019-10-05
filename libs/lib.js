const miment = require('miment');

/**
 * 函式
 */
function Lib()
{
    function getWorkedDate(today)
    {
        today = today || miment().format('YYYY-MM-DD');
        let diff_secs = miment(today + ' 00:00:00').diff('2019-04-01 00:00:00') / 1000;
        let diff_days = diff_secs / 86400;

        return diff_days + 1;
    }

    function getSurvivedDate()
    {
        let today = miment().format('YYYY-MM-DD');
        let diff_secs = miment('2019-08-30 00:00:00').diff(today + ' 00:00:00') / 1000;
        let diff_days = diff_secs / 86400;

        return diff_days + 1;
    }

    function getTimeRemaining(endtime){
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getCountDownDate(today)
    {
        let designedDate = '2019-08-30 00:00:00'; //Date of QQ

        today = today || miment().format('YYYY-MM-DD');
        let nowDate = today + ' 00:00:00';
        //let diff_secs = miment(today + ' 00:00:00').diff('2019-04-01 00:00:00') / 1000;

        let diff_secs = miment(designedDate).diff(nowDate) / 1000;
        let diff_days = diff_secs / 86400;

        return diff_days + 1;
    }

    /**
     * 記錄常用 User ID Hash
     * @param hash
     * @returns {string}
     */
    function recognizePeople(hash)
    {
        switch(hash) {
            case 'Ua0c22c49b0b3ca7d56da015d4ff37b17':
                return 'mou';
            case 'U8270abd630176c647e12153d3afa5f9a':
                return '我大阿酷';
            case 'U58f6451fbfbf8227628e6d09945d4a62':
                return '帥橘子';
            case 'U2cdda2ee76097f9021bb68e70feffdb4':
                return '老凹';
            case 'U0941ee4f48f2e8d6e92ea825f60c53e2':
                return '我大雲姐';
            default:
                return '';
        }
    }

    //Get Special Emoji from Line
    function getEmoji(unicode)
    {
        return String.fromCodePoint(unicode);
    }

    return {
        getTimeRemaining: getTimeRemaining,
        getSurvivedDate : getSurvivedDate,
        getEmoji: getEmoji,
        getCountDownDate: getCountDownDate,
        getWorkedDate: getWorkedDate,
        recognizePeople: recognizePeople
    }
}
module.exports = new Lib();