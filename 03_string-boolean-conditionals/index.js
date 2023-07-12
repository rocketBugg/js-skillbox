//  Задание 1

let password = "123456789";


if (password.includes(('-') || password.includes('_')) && password.length >= 4 ) {
  console.log('Пароль надежный')
}
else {
  console.log('Пароль не надежный, нужно указать пароль содержаший минимум 4 символа и чтобы учавствовал символ \"-\" или \"_\"')
};


// Задание 2

let userName = 'вАсЯ';
let userSurname = 'пуПКиН';
let firstName = userName.substring(0,1).toUpperCase();
let lastName = userName.substring(1).toLowerCase();
let firstSurname = userSurname.substring(0,1).toUpperCase();
let lastSurname = userSurname.substring(1).toLowerCase();
let newName = firstName + lastName;
let newSurname = firstSurname + lastSurname;
// let newUserData = newName + " " + newSurname;

if (newName !== userName && newSurname !== userSurname) {
  console.log ('Имя было преобразовано и стало:' + newName + ' ' + newSurname);
}
else {
  console.log('Имя осталось без изменений: ' + userName + ' ' + userSurname);
}

// Задание 3

let number = 5;

if(number % 2 === 0) {
  console.log('Число четное');
}
else {
  console.log('Число нечетное');
}
