function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => a - b);
    num = arr.indexOf(num);
    return num;
}

console.log(getIndexToIns([3, 10, 5], 3));