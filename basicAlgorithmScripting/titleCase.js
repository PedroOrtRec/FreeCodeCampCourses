function titleCase(str) {

    str = str.toLowerCase();

    str = str.split(' ').map(word => {
        return word[0].toUpperCase() + word.slice(1)
    }).join(' ')

    return str;
}

titleCase("I'm a little tea pot");