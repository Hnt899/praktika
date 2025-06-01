let user = {
  name: "John",
  go: function() { alert(this.name) }
}; // Добавлена точка с запятой

user.go(); // Корректно выведет "John"