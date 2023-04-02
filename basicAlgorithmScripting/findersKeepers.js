function findElement(arr, func) {
    let num = undefined;

    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            num = arr[i]
            return num
        }
    }
    return num;
};

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));