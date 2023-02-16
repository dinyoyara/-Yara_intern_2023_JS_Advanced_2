function duckCount(...arg) {
    return arg.filter((x) => Object.prototype.hasOwnProperty.call(x, 'quack')).length;
}

module.exports = duckCount;
