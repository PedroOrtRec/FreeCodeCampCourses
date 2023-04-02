function mutation(arr) {
    let firstElement = arr[0].toUpperCase().split('');
    let secondElement = arr[1].toUpperCase().split('');
    arr = true
    secondElement.forEach(letter => {
        if (!firstElement.includes(letter)) {
            arr = false;
        }
    });
    return arr;
}

console.log(mutation(["hello", "hey"]));