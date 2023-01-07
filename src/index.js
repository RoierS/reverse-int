module.exports = function reverse(n) {
    let nToArray = String(n).split('').map((n) => {return Number(n)});
    let reverseArray = nToArray.reverse();
    let result = parseFloat(reverseArray.join(''));
    return result;
}
