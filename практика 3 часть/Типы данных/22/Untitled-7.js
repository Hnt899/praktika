let arr = ["a", "b"];

arr.push(function() {
    alert(this);
});

arr[2](); // Выведет содержимое массива: "a,b,function() { alert(this); }"