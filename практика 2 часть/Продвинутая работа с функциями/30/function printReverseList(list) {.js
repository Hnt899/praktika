function printReverseList(list) {
    if (list.next) printReverseList(list.next);
    alert(list.value);
}



function printReverseList(list) {
    let values = [];
    let current = list;
    
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    
    for (let i = values.length - 1; i >= 0; i--) {
        alert(values[i]);
    }
}