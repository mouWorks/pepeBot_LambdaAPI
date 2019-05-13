/**
 * 隨機
 */
function Rand()
{
    function getFromArray (ArrayNames)
    {
        var length = ArrayNames.length;
        return ArrayNames[Math.floor(Math.random() * length)];
    }

    function getValue(limit)
    {
        return [Math.floor(Math.random() * limit)];
    }

    function getNumber(x, y) {
        var diff = y - x;
        return x + Math.floor(Math.random() * diff);
    }

    return {
        getFromArray : getFromArray,
        getValue     : getValue,
        getNumber    : getNumber
    }
}
module.exports = new Rand();