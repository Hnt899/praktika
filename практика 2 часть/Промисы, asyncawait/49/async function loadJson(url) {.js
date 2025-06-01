async function loadJson(url) {
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new Error(response.status);
  }
}

// Использование
try {
  const data = await loadJson('no-such-user.json');
} catch (err) {
  alert(err); // Error: 404
}