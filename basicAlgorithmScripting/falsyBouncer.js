function bouncer(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArr.push(arr[i])
    }
    arr = newArr;
    return arr;
}

console.log(bouncer([7, "ate", "", false, 9]))