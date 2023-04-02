function chunkArrayInGroups(arr, size) {
    let arrLength = arr.length;
    let newArr = []
    for (let i = 0; i < arrLength; i = i + size) {
        newArr.push(arr.slice(i, (i + size)))
    }
    arr = newArr
    return arr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));