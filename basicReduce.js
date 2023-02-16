function countWords(inputWords) {
    return inputWords.reduce((acc, x) => {
        acc[x] === undefined ? (acc[x] = 1) : (acc[x] += 1);
        return acc;
    }, {});
}

module.exports = countWords;
