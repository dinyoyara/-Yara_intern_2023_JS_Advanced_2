function logger(namespace) {
    return function (...arg) {
        console.log.apply(console, [namespace, ...arg]);
    };
}

module.exports = logger;
