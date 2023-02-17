function curryN(fn, n) {
    let argCount = n !== undefined ? n : fn.length;
    return function one(...arg1) {
        if (arg1.length >= argCount) {
            return fn.apply(this, arg1);
        } else {
            return function two(...arg2) {
                return one.apply(this, arg1.concat(arg2));
            };
        }
    };
}

module.exports = curryN;
