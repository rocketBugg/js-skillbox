// Задание 1

function getAge(age) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  if ((currentYear - age) < 0) {
    console.log ('Вы еще не родились?');
  }
  else if ( (currentYear - age) === 0){
    console.log('Вы родились в этом году. Поздравляем!');
  }
   else {
   console.log(currentYear - age)
  }
  return getAge;
}

getAge(1998);
getAge(1991);
getAge(2023);

// Задание 2


  // Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']

function filter(whiteList, blackList) {
  let filteredEmails = [];
  for (let i = 0; i < whiteList.length; i++) {
    if (!blackList.includes(whiteList[i])) {
      filteredEmails.push(whiteList[i])
    }
  }
  return filteredEmails;
}

let result = filter(whiteList, blackList)
console.log(result);

// Задание 3

let arr = [0, -1]

function sort(arr) {
  let result = [...arr];
  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1; i++) {
      if (result[i] > result[i + 1]) {
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
    }
  }
  return result;
}

console.log(sort(arr));



