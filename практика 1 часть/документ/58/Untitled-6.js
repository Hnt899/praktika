// Код выведет 1, так как document.body.lastChild - это элемент <script>
// nodeType для элементов равен 1 (Node.ELEMENT_NODE)
alert(document.body.lastChild.nodeType); // 1