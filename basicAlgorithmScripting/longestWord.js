function findLongestWordLength(str) {
    let strSplited = str.split(' ');
    let maxLength = '';
    strSplited.forEach(word => {
        if (word.length > maxLength.length) {
            maxLength = word;
        }
    })
    str = maxLength;
    return str.length;
}

let longestWord = findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(longestWord);