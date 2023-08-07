(function () {
  // создаём и возвращем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWraper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWraper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    buttonWraper.append(button);
    form.append(input);
    form.append(buttonWraper);

    input.addEventListener('input', function (e) {
      if (input.value.length > 0) {
        button.disabled = false;
      }
      else if (input.value.length === 0) {
        button.disabled = true;
      }
    })

    return {
      form,
      input,
      button,
    };
  }

  // создаём и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  function createTodoItem(obj) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // Устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помощью флекс
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить';

    // Вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы отрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
      obj,
    };
  };


  function createTodoApp(container, title = 'Список дел', person) {
    let tasks = [];
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    let storage = localStorage.getItem(person);
    if (storage !== null) {
      let storageItem = JSON.parse(storage);
      for (let sItem of storageItem) {
        tasks.push(sItem);
        let todoItem = createTodoItem(sItem);
        todoList.append(todoItem.item);

        // Эта строка позволяет сохранять выделение зеленым цветом у задания, которое уже выполнено, при переключении между окнами (мои дела, дела мамы, дела папы)
        if (todoItem.obj.done) {
          todoItem.item.classList.toggle('list-group-item-success');
        }

        // Без повторения этого кода - не работают кнопки (готово или удалить) у элементов из стораджа
        todoItem.doneButton.addEventListener('click', function () {
          todoItem.item.classList.toggle('list-group-item-success');
          if (todoItem.obj.done) {
            todoItem.obj.done = false;
          } else {
            todoItem.obj.done = true;
          };
          localStorage.setItem(person, JSON.stringify(tasks));
        });

        todoItem.deleteButton.addEventListener('click', function (obj) {
          if (confirm('Вы уверены?')) {
            todoItem.item.remove();
            let index = tasks.indexOf(todoItem.obj);
            tasks.splice(index, 1)
            localStorage.setItem(person, JSON.stringify(tasks));
          }
        });
      }
    }

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    // браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function (e) {
      // эта строчка необходима, чтобы предотвратить стандартное действие браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      // localStorage.setItem(key, JSON.stringify(todoItemForm.input.value))
      // игнорируем создание элемента, если пользователь ничего не ввёл в поле
      if (!todoItemForm.input.value) {
        return;
      }

      // задаем значение ключа "name" и ключа "done" и ключа "id"
      function getNewId(arr) {
        let max = 0;
        for (let elem of arr) {
          if (max < elem.id) {
            max = elem.id;
          }
        }
        return max + 1;
      };
      let id = getNewId(tasks);
      let name = todoItemForm.input.value;
      let done = false;
      let todoItem = createTodoItem({ id, name, done });

      // добавляем обработчики на кнопки
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success');
        if (todoItem.obj.done) {
          todoItem.obj.done = false;
        } else {
          todoItem.obj.done = true;
        };
        localStorage.setItem(person, JSON.stringify(tasks));
      });

      todoItem.deleteButton.addEventListener('click', function (obj) {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove();
          let index = tasks.indexOf(todoItem.obj);
          tasks.splice(index, 1)
          localStorage.setItem(person, JSON.stringify(tasks));
        }
      });

      // push to massive
      tasks.push(todoItem.obj);
      localStorage.setItem(person, JSON.stringify(tasks));

      // создаём и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItem.item);
      // обнуляем значение в поле, чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      // делаем кнопку неактивной, т.к. обнулили значение поля
      todoItemForm.button.disabled = true;
    });
  }

  window.createTodoApp = createTodoApp;
})();
