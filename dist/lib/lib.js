"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmoji = exports.recognizePeople = exports.getCountDownDate = exports.getTimeRemaining = exports.getSurvivedDate = exports.getWorkedDate = exports.getRandomFromArrayWithStringStyle = void 0;
const miment_1 = __importDefault(require("miment"));
function getRandomFromArrayWithStringStyle(ArrayNames) {
    var length = ArrayNames.length;
    var getString = ArrayNames[Math.floor(Math.random() * length)];
    var style = Math.floor(Math.random() * 7);
    switch (style) {
        case 0:
            return '`' + getString + '`';
        case 1:
            return '_' + getString + '_';
        case 2:
            return '*' + getString + '*';
        default:
            return '*' + getString + '*';
    }
}
exports.getRandomFromArrayWithStringStyle = getRandomFromArrayWithStringStyle;
function getWorkedDate(today = '') {
    today = today || (0, miment_1.default)().format('YYYY-MM-DD');
    let diff_secs = (0, miment_1.default)(today + ' 00:00:00').diff('2019-04-01 00:00:00') / 1000;
    let diff_days = diff_secs / 86400;
    return diff_days + 1;
}
exports.getWorkedDate = getWorkedDate;
function getSurvivedDate() {
    let today = (0, miment_1.default)().format('YYYY-MM-DD');
    let diff_secs = (0, miment_1.default)('2019-08-30 00:00:00').diff(today + ' 00:00:00') / 1000;
    let diff_days = diff_secs / 86400;
    return diff_days + 1;
}
exports.getSurvivedDate = getSurvivedDate;
function getTimeRemaining(target_time) {
    let t_target = Date.parse(target_time);
    let t_now = Date.parse(new Date().toISOString());
    let t = null;
    let type = null;
    if (t_target >= t_now) {
        t = t_target - t_now;
        type = 'before';
    }
    else {
        t = t_now - t_target;
        type = 'after';
    }
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        type: type,
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}
exports.getTimeRemaining = getTimeRemaining;
function getCountDownDate(today) {
    let designedDate = '2019-08-30 00:00:00'; //Date of QQ
    today = today || (0, miment_1.default)().format('YYYY-MM-DD');
    let nowDate = today + ' 00:00:00';
    //let diff_secs = miment(today + ' 00:00:00').diff('2019-04-01 00:00:00') / 1000;
    let diff_secs = (0, miment_1.default)(designedDate).diff(nowDate) / 1000;
    let diff_days = diff_secs / 86400;
    return diff_days + 1;
}
exports.getCountDownDate = getCountDownDate;
/**
 * 記錄常用 User ID Hash
 * @param hash
 * @returns {string}
 */
function recognizePeople(hash) {
    switch (hash) {
        case 'Ua0c22c49b0b3ca7d56da015d4ff37b17':
            return 'mou';
        case 'U8270abd630176c647e12153d3afa5f9a':
            return '我大阿酷';
        case 'U58f6451fbfbf8227628e6d09945d4a62':
            return '帥橘子';
        case 'U2cdda2ee76097f9021bb68e70feffdb4':
            return '老豆';
        case 'U0941ee4f48f2e8d6e92ea825f60c53e2':
            return '我大雲姐';
        default:
            return '';
    }
}
exports.recognizePeople = recognizePeople;
//Get Special Emoji from Line
function getEmoji(unicode) {
    return String.fromCodePoint(unicode);
}
exports.getEmoji = getEmoji;
//# sourceMappingURL=lib.js.map