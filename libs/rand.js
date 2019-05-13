/**
 * 隨機
 */
function Rand()
{
    function getFromArray (ArrayNames)
    {
        let length = ArrayNames.length;
        return ArrayNames[Math.floor(Math.random() * length)];
    }

    function getValue(limit)
    {
        return [Math.floor(Math.random() * limit)];
    }

    function getNumber(lower_limit, upper_limit)
    {
        let diff = upper_limit - lower_limit;
        return lower_limit + Math.floor(Math.random() * diff);
    }

    return {
        getFromArray : getFromArray,
        getValue     : getValue,
        getNumber    : getNumber
    }
}
module.exports = new Rand();