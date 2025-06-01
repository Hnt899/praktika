function camelize(str) {
    return str
        .split('-')
        .map((word, index) => 
            index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}

// Примеры:
alert(camelize("background-color")); // backgroundColor
alert(camelize("-webkit-transition")); // WebkitTransition