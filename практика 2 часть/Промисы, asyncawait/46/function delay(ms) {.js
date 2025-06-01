function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Использование
delay(3000).then(() => alert('выполнилось через 3 секунды'));