function truncateString(str, num) {
    let truncatedStr = '';
    if (num >= str.length) {
        return str;
    } else {
        for (let i = 0; i < num; i++) {
            truncatedStr += str[i]
        }
        truncatedStr += '...'

        str = truncatedStr;
    }
    return str;
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));