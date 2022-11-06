import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let dataForm = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
   console.log(dataForm);
  event.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
   dataForm[refs.input.name] = '';
  dataForm[refs.textarea.name] = '';
}

function onTextareaInput(event) {
  dataForm[event.target.name] = event.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataForm));
}

populateTextarea();

function populateTextarea() {
  const savedMessage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const parsedMessage = JSON.parse(savedMessage);
  if (savedMessage) {
    if (parsedMessage.email) {
      refs.input.value = parsedMessage.email;
      dataForm[refs.input.name] = parsedMessage.email;
    }
    if (parsedMessage.message) {
      refs.textarea.value = parsedMessage.message;
      dataForm[refs.textarea.name] = parsedMessage.message;
    }
  }
}


// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище
//  об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища,
//     і якщо там є збережені дані, заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми,
//     а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше,
//     ніж раз на 500 мілісекунд.Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

// function populateTextarea() {
//     const savedMessage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     console.log(savedMessage);
//     if (savedMessage) {
//      console.log(savedMessage);
//         dataForm = savedMessage;
//         refs.input.value = dataForm.email || ""
//         refs.textarea.value = data.message || "";
//     };
// };

// Метод JSON.stringify()
// Приймає значення і перетворює його у JSON.Значенням може бути число, буль, null, масив 
// або об'єкт. Рядки - це вже валідний JSON, тому в їх перетворенні немає сенсу.

// Метод JSON.parse()
// Щоб отримати з JSON валідне JavaScript значення, його необхідно розпарсити(parse).
// Це операція зворотна перетворенню в рядок(stringify).
//   Тепер, коли dog - це валідний об'єкт, з ним можна працювати звичайним чином.

// setItem(key, value) - створює новий, або оновлює вже існуючий запис у сховищі.
// getItem(key) - повертає зі сховища значення з ключем key.
// removeItem(key) - видаляє зі сховища запис з ключем key.