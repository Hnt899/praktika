function unique(arr) {
    return Array.from(new Set(arr));
}

// Пример:
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
alert(unique(strings)); // кришна, харе, :-O