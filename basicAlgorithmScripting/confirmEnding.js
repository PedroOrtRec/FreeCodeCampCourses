function confirmEnding(str, target) {

    let a = Number(str.length) - Number(target.length)
    let b = Number(str.length)
    let strEnd = str.substring(a, b)
    if (strEnd === target) {
        str = true
    } else {
        str = false
    }

    return str;
};

console.log(confirmEnding("Bastian", "n"));