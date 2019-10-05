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

    function recognizePeople(hash)
    {
        switch(hash) {
            case 'Ua0c22c49b0b3ca7d56da015d4ff37b17':
                return 'mou';
            case 'U8270abd630176c647e12153d3afa5f9a':
                return 'lay';
            case 'U58f6451fbfbf8227628e6d09945d4a62':
                return 'jonic';
            case 'U2cdda2ee76097f9021bb68e70feffdb4':
                return 'leo';
            case 'U0941ee4f48f2e8d6e92ea825f60c53e2':
                return 'cloud';
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
        getEmoji: getEmoji,
        getCountDownDate: getCountDownDate,
        getWorkedDate: getWorkedDate,
        recognizePeople: recognizePeople
    }
}
module.exports = new Lib();