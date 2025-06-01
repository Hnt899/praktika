function f() {
  alert(this.name); // "Вася"
}

f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );

f();