function formatDate(date) {

  let dd = new Date(date).getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = new Date(date).getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = new Date(date).getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

let studentsList = [
  { name: 'Гарри', surname: 'Поттер', middleName: 'Джеймс', dateOfBirth: new Date(1980, 6, 31), educationYear: new Date(2020, 8, 1), facultee: 'Гриффиндор' },
  { name: 'Гермиона', surname: 'Грейнджер', middleName: 'Ивановна', dateOfBirth: new Date(1979, 8, 19), educationYear: new Date(1996, 8, 1), facultee: 'Гриффиндор' },
  { name: 'Северус', surname: 'Снегг', middleName: 'Александрович', dateOfBirth: new Date(1960, 0, 9), educationYear: new Date(1976, 8, 1), facultee: 'Слизерин' },
  { name: 'Минерва', surname: 'МакГонагалл', middleName: 'Сергеевна', dateOfBirth: new Date(1935, 9, 4), educationYear: new Date(1951, 8, 1), facultee: 'Пуффиндуй' },
  { name: 'Полумна', surname: 'Лавгуд', middleName: 'Петровна', dateOfBirth: new Date(1981, 1, 13), educationYear: new Date(1995, 8, 1), facultee: 'Когтевран' }
]



// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией о пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {
  let userOne = studentsList[0];
  const $tableBody = document.getElementById('tbody');
  const $userTr = document.createElement('tr'),
    $userFio = document.createElement('td'),
    $userBirthDate = document.createElement('td'),
    $userEducationYear = document.createElement('td'),
    $userFacultee = document.createElement('td');

  $userFio.textContent = userOne.surname + ' ' + userOne.name + ' ' + userOne.middleName;
  $userBirthDate.textContent = userOne.dateOfBirth;
  $userEducationYear.textContent = userOne.educationYear.getFullYear();
  $userFacultee.textContent = userOne.facultee;

  $userTr.append($userFio);
  $userTr.append($userBirthDate);
  $userTr.append($userEducationYear);
  $userTr.append($userFacultee);
  $tableBody.append($userTr);

  $userTr.classList.add('d-flex', 'justify-content-between');
  $userFio.classList.add('w-25');
  $userBirthDate.classList.add('w-25');
  $userEducationYear.classList.add('w-25');
  $userFacultee.classList.add('w-25');
  return  userOne
}
// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {
  let copy = [...studentsList];

  // filter
  if ($fioFilterInp.value.trim() !== '') {
    copy = copy.filter(function (userOne) {
      if (userOne.fio.toLowerCase().includes($fioFilterInp.value.toLowerCase().trim())) {
        return true
      }
    })
  }

  if ($dateOfStartFilterInp.value.trim() !== '') {
    copy = copy.filter(function (userOne) {
      if (userOne.educationYear.getFullYear() == (new Date($dateOfStartFilterInp.value).getFullYear())) {
        return true
      }
    })
  }

  if ($dateOfEndFilterInp.value.trim() !== '') {
    copy = copy.filter(function (userOne) {
      if (userOne.educationYear.getFullYear() + 4 == (new Date($dateOfEndFilterInp.value).getFullYear())) {
        return true
      }
    })
  }

  if ($faculteeFilterInp.value.trim() !== '') {
    copy = copy.filter(function (userOne) {
      if (userOne.facultee.toLowerCase().includes($faculteeFilterInp.value.toLowerCase().trim())) {
        return true
      }
    })
  }

  tbody.textContent = '';
  // sort
    copy = copy.sort(function (a, b) {
      let sort = a[sortColumnFlag] < b[sortColumnFlag]
      if (sortDirFlag == false) {
        sort = a[sortColumnFlag] > b[sortColumnFlag];
      }
      if (sort) return -1
    });

       for (const userOne of copy) {
      let now = new Date(); //Текущя дата
      let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
      let dob = userOne.dateOfBirth;
      let ey = userOne.educationYear;
      let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
      let age = today.getFullYear() - dob.getFullYear();
      if (today < dobnow) {
        age = age - 1;
      }
      let course = today.getFullYear() - ey.getFullYear();
      let educationEnd = userOne.educationYear.getFullYear() + 4;
      if (now < new Date(now.getFullYear(), 8, 1)) {
        course = `(${course} курс)`
      } else if (now < new Date(now.getFullYear(), 8, 1)) {
        course = `(${course + 1} курс)`
      }
      if (now.getFullYear() > educationEnd) {
        course = 'закончил';
      }
      const $tableBody = document.getElementById('tbody'),
      $userTr = document.createElement('tr'),
      $userFio = document.createElement('td'),
      $userBirthDate = document.createElement('td'),
      $userEducationYear = document.createElement('td'),
      $userFacultee = document.createElement('td');
    userOne.fio = userOne.surname + ' ' + userOne.name + ' ' + userOne.middleName
    $userFio.textContent = userOne.fio;
    $userBirthDate.textContent = formatDate(userOne.dateOfBirth) + ' (' + `${age}` + ' лет)';
    $userEducationYear.textContent = `${userOne.educationYear.getFullYear()}` + '-' + `${educationEnd}` + ' ' + course;
    $userFacultee.textContent = userOne.facultee;
    $userTr.append($userFio);
    $userTr.append($userBirthDate);
    $userTr.append($userEducationYear);
    $userTr.append($userFacultee);
    $tableBody.append($userTr);
    }

  return copy
}



// Этап 5.1 К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.
function validation(form) {
  let now = new Date(); //Текущя дата
  function removerErorr(input) {
    const parent = input.parentNode;
    if (parent.classList.contains('error')) {
      parent.querySelector('label').remove();
      parent.classList.remove('error')
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label');
    errorLabel.classList.add('error-label');
    errorLabel.textContent = text;
    parent.classList.add('error');
    parent.append(errorLabel);
  }

  let result = true;
  const allInputs = form.querySelectorAll('input')
  for (const input of allInputs) {

    removerErorr(input)

    if (input.dataset.birthDate == 'true') {
      if (new Date(input.value.trim()) < new Date(1900, 0, 1) || input.value.trim() == '' || new Date(input.value.trim()) > now) {
        createError(input, 'Введите данные в формате от 01.01.1900 по текущий год')
        result = false;
      }
    }

    if (input.dataset.dateOfLearning == 'true') {
      if (input.value.trim() < 2000 || input.value > now.getFullYear()) {
        createError(input, 'Поступить можно было только с 2000 года по текущую дату! ')
        result = false;
      }
    }

    if (input.dataset.required == 'true') {
      if (input.value.trim() == '') {
        createError(input, 'Необходимо ввести данные для отправки формы!')
        result = false;
      }
    }
  }
  return result
}
const $addStudent = document.getElementById('add-student');
$addStudent.addEventListener('submit', function (event) {
  event.preventDefault();
  const $surnameInp = document.getElementById('add-student__surname-inp'),
    $nameInp = document.getElementById('add-student__name-inp'),
    $middleNameInp = document.getElementById('add-student__middlename-inp'),
    $faculteeInp = document.getElementById('add-student__facultee-inp'),
    $birthDateInp = document.getElementById('add-student__birth-date-inp'),
    $studyYearInp = document.getElementById('add-student__study-year-inp');
  document.getElementById('tbody')


  if (validation(this) == true) {
    let newStudentObj = {
      name: $nameInp.value.trim()[0].toUpperCase() + $nameInp.value.trim().slice(1),
      surname: $surnameInp.value.trim()[0].toUpperCase() + $surnameInp.value.trim().slice(1),
      middleName: $middleNameInp.value.trim()[0].toUpperCase() + $middleNameInp.value.trim().slice(1),
      dateOfBirth: new Date($birthDateInp.value.trim()),
      educationYear: new Date($studyYearInp.value.trim()),
      facultee: $faculteeInp.value.trim()[0].toUpperCase() + $faculteeInp.value.trim().slice(1)
    }
    studentsList.push(newStudentObj);
    tbody.textContent = ''
    renderStudentsTable(studentsList);
  }

})

// Этап 5.2 Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.
let sortDirFlag = true;
let sortColumnFlag = 'fio';

const fioSort = document.getElementById('fio'),
  dateOfBirth = document.getElementById('date-of-birth'),
  educatioStart = document.getElementById('education-start'),
  facultee = document.getElementById('facultee');

fioSort.addEventListener('click', function () {
  console.log('Отсортировано по ФИО');
  sortDirFlag = !sortDirFlag;
  renderStudentsTable(studentsList)
})

dateOfBirth.addEventListener('click', function () {
  console.log('Отсортировано по дате рождения');
  sortColumnFlag = 'dateOfBirth'
  sortDirFlag = !sortDirFlag;
  renderStudentsTable(studentsList)
})

educatioStart.addEventListener('click', function () {
  console.log('Отсортировано по году начала обучения');
  sortColumnFlag = 'educationYear'
  sortDirFlag = !sortDirFlag;
  renderStudentsTable(studentsList)
});

facultee.addEventListener('click', function () {
  console.log('Отсортировано по названию факультета');
  sortColumnFlag = 'facultee'
  sortDirFlag = !sortDirFlag;
  renderStudentsTable(studentsList)
});


// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
const $filterForm = document.getElementById('filter-form'),
  $fioFilterInp = document.getElementById('filter-form__fio-inp'),
  $dateOfStartFilterInp = document.getElementById('filter-form__start-inp'),
  $dateOfEndFilterInp = document.getElementById('filter-form__end-inp'),
  $faculteeFilterInp = document.getElementById('filter-form__facultee');

$filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})
// Фильтрация
// function filter(arr, prop, value) {
//   return arr.filter(function (item) {
//     if (item[prop].includes(value.trim()))
//       return true;
//   })
// }


$fioFilterInp.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})


$dateOfStartFilterInp.addEventListener('input', function () {
    renderStudentsTable(studentsList)
})

$dateOfEndFilterInp.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

$faculteeFilterInp.addEventListener('input', function () {
  renderStudentsTable(studentsList)
})

renderStudentsTable(studentsList)
