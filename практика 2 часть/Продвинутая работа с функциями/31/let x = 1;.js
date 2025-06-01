let x = 1;

function func() {
  console.log(x); // Ошибка: Cannot access 'x' before initialization
  let x = 2;
}

func();