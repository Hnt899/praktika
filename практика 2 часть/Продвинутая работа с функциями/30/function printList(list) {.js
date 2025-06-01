function printList(list) {
    let current = list;
    while (current) {
        alert(current.value);
        current = current.next;
    }
}





function printList(list) {
    alert(list.value);
    if (list.next) printList(list.next);
}