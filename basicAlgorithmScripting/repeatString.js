function repeatStringNumTimes(str, num) {

    let repeatedstr = str

    if (num === 0 || num < 0) {
        str = ""
    }
    else if (num > 1) {
        for (let i = 1; i < num; i++) {
            repeatedstr += str
        }
        str = repeatedstr
    }

    return str
};

console.log(repeatStringNumTimes("abc", 3));