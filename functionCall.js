module.exports = slice = (...arg) => {
    const [arr, ...restArg] = arg;
    return Array.prototype.slice.bind(arr, ...restArg)();
};
