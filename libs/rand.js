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

    return {
        getFormArray : getFromArray,
        getValue : getValue,
    }
}
module.exports = new Rand();