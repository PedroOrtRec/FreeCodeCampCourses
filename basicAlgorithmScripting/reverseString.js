function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
};

let reversedString = reverseString('Hello');
console.log(reversedString);