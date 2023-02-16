function Spy(target, method) {
    const spy = { count: 0 };
    const methodFunction = target[method];
    target[method] = function () {
        spy.count++;
        return methodFunction.apply(this, arguments);
    };

    return spy;
}

module.exports = Spy;
