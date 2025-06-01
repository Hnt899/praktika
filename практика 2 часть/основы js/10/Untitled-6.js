for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) alert(i);
}

// Или более оптимально:
for (let i = 2; i <= 10; i += 2) {
  alert(i);
}