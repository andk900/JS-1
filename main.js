var Name = prompt('Как вас зовут ?');

Name = 'Меня зовут ' + Name + '.';

console.log(Name);

var Age = prompt('Сколько вам лет ?');

Age = 'Мне ' + Age + ' лет.';

console.log(Age);

var decide = +prompt('Решите пример: 10 - 5 = ?');

decide = '      Ваш ответ: ' + decide;

console.log('Пример 1: ' + '10 - 5 = ' + (10 - 5) + decide);

var decide = +prompt('Решите пример: 10 + 5 = ?');

decide = '      Ваш ответ: ' + decide;

console.log('Пример 2: ' + '10 + 5 = ' + (10 + 5) + decide);

var decide = +prompt('Решите пример: 10 x 5 = ?');

decide = '      Ваш ответ: ' + decide;

console.log('Пример 3: ' + '10 x 5 = ' + 10 * 5 + decide);

var decide = +prompt('Решите пример: 10 : 5 = ?');

decide = '      Ваш ответ: ' + decide;

console.log('Пример 4: ' + '10 : 5 = ' + 10 / 5 + decide);

var decide = +prompt('Решите пример: 10 % 9 = ?');

decide = '      Ваш ответ: ' + decide;

console.log('Пример 5: ' + '10 % 9 = ' + 10 % 9 + decide);

var end = 'Откройте конcоль для просмотра. (Нажмите F12)';

alert(end);