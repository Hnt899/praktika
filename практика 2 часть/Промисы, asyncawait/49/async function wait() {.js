async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return 10;
}

function f() {
  // Способ 1: Использовать then
  wait().then(result => console.log(result)); // 10
  
  // Способ 2: Использовать IIFE (немедленно вызываемую функцию)
  (async () => {
    const result = await wait();
    console.log(result); // 10
  })();
}

f();