function frankenSplice(arr1, arr2, n) {

    let arr3 = arr2.slice(0, n);
    let arr4 = arr2.slice(n);
    arr2 = arr3.concat(arr1);
    arr2 = arr2.concat(arr4);

    return arr2;

}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));