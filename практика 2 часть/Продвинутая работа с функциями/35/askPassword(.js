askPassword(
  () => user.login(true),
  () => user.login(false)
);

// Или с использованием bind:
askPassword(
  user.login.bind(user, true),
  user.login.bind(user, false)
);