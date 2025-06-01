let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room,
};

// Создаем циклические ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let meetupJson = JSON.stringify(meetup, function replace(key, value) {
  // Исключаем свойства, которые ссылаются на meetup
  return (key !== '' && value === meetup) ? undefined : value;
});

console.log(meetupJson);
/* Результат:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/