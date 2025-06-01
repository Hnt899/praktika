let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

// Пример:
alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин