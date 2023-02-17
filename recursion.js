function getDependencies(tree) {
    if (!tree.hasOwnProperty('dependencies')) return [];
    let depList = Object.entries(tree['dependencies']);

    let allValues = depList.reduce((acc, x) => {
        acc.push(`${x[0]}@${x[1]['version']}`);
        if (x[1]['dependencies']) {
            let innerDep = getDependencies(x[1]);
            acc = acc.concat(innerDep);
        }
        return acc;
    }, []);
    return [...new Set(allValues.sort())];
}

module.exports = getDependencies;
