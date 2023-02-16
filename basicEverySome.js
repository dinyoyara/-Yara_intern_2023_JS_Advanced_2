function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every((su) => goodUsers.some((gu) => gu.id === su.id));
    };
}

module.exports = checkUsersValid;
