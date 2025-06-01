function throttle(f, ms) {
  let isThrottled = false;
  let lastArgs;
  let lastThis;
  
  function wrapper() {
    if (isThrottled) {
      lastArgs = arguments;
      lastThis = this;
      return;
    }
    
    f.apply(this, arguments);
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
      if (lastArgs) {
        wrapper.apply(lastThis, lastArgs);
        lastArgs = lastThis = null;
      }
    }, ms);
  }
  
  return wrapper;
}

// Пример использования:
function f(a) {
  console.log(a);
}

let f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (игнорируется)
f1000(3); // (игнорируется)
// через 1000мс выведет 3