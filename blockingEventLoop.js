function repeat(operation, num) {
    if (num <= 0) return;
    if (num % 10 === 0) {
        setTimeout(() => {
            operation();
            return repeat(operation, --num);
        }, 100);
    } else {
        operation();
        return repeat(operation, --num);
    }
}

module.exports = repeat;
