module.exports = function arrayMap(arr, fn) {
    return arr.reduce((acc, x) => {
        acc.push(fn(x));
        return acc;
    }, []);
};
