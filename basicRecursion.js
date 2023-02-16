function reduce(arr, fn, initial) {
    if (arr.length === 0) return initial;
    const [firstValue, ...rest] = arr;
    let acc = fn(initial, firstValue);
    return reduce(rest, fn, acc);
}

module.exports = reduce;
