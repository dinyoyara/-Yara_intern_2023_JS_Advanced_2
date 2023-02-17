function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
}

module.exports = function (operation, num) {
    return () => repeat(operation, num);
};
