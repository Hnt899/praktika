<div id="elem">
  Текстовый узел
  <!-- Комментарий -->
  <p>Первый элемент</p>
</div>

<script>
  const elem = document.getElementById('elem');
  console.log(elem.children[0].previousSibling); // Не null (комментарий или текст)
</script>