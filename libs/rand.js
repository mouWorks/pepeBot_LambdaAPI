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

    function getRandomHand(){
        const handArray = ["👈","👆","👉"];
        let length = handArray.length;
        return handArray[Math.floor(Math.random() * length)];
    }

    return {
        getFromArray : getFromArray,
        getValue     : getValue,
        getNumber    : getNumber,
        getRandomHand: getRandomHand
    }
}
module.exports = new Rand();