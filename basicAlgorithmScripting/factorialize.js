function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    for (let i = num - 1; i > 1; i--) {
        num = num * i;
    }
    return num;
};

let result = factorialize(5);
console.log(result);