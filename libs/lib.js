const miment = require('miment');

/**
 * 函式
 */
function Lib()
{
    function getRandomFromArrayWithStringStyle(ArrayNames)
    {
        var length = ArrayNames.length;
        var getString = ArrayNames[Math.floor(Math.random() * length)];
        var style = Math.floor(Math.random() * 7);

        switch(style){
            case 0:
                getString = "`" + getString + "`";
                break;

            case 1:
                getString = "_" + getString + "_";
                break;

            case 2:
                getString = "*" + getString + "*";
                break;

            default:
                getString = "*" + getString + "*";
                //getString = chokeString(getString);
                break;
        }

        return getString;
    }

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

    function getTimeRemaining(target_time){
        let t_target = Date.parse(target_time);
        let t_now = Date.parse(new Date());

        let t = null;
        let type = null;
        if (t_target >= t_now) {
            t = t_target - t_now;
            type = 'before';
        } else {
            t = t_now - t_target;
            type = 'after';
        }

        let seconds = Math.floor((t / 1000) % 60);
        let minutes = Math.floor((t / 1000 / 60) % 60);
        let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'type' : type,
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
        getRandomFromArrayWithStringStyle: getRandomFromArrayWithStringStyle,
        getTimeRemaining: getTimeRemaining,
        getSurvivedDate : getSurvivedDate,
        getEmoji: getEmoji,
        getCountDownDate: getCountDownDate,
        getWorkedDate: getWorkedDate,
        recognizePeople: recognizePeople
    }
}
module.exports = new Lib();