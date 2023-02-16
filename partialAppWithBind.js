module.exports = function (namespace) {
    return function (...arg) {
        console.log.bind(console, namespace, ...arg)();
    };
};
