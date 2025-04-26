// Счетчик для кнопки "press"
let counter = 0;

// Счетчик для создания уникальных записей
var counter1 = 0;


// Функция инициализации элементов и событий
function init() {
    // Получаем ссылку на div для отображения счетчика
    const div = document.getElementById("div");

    // Получаем ссылки на кнопки
    const button = document.getElementById("button");
    const buttonList = document.getElementById("buttonList");

    // Назначаем обработчики событий на кнопки
    button.addEventListener('click', pressButton);
    buttonList.addEventListener('click', createList);

    // Устанавливаем начальное значение счетчика в div
    div.innerHTML = counter;
}

// Функция увеличения счетчика при нажатии на кнопку "press"
function pressButton() {
    counter++; // Увеличиваем счетчик
    div.innerHTML = counter; // Обновляем содержимое div

    // Здесь будет ошибка, потому что переменная div локальная в init.
    // Нужно вынести div в глобальную область, чтобы использовать здесь.
}

// Получаем ссылку на список ul для добавления новых элементов
var list = document.getElementById("list");

// Функция для создания новой записи в списке
function createList() {
    // Создаем новый элемент списка
    const li = document.createElement('li');
    li.textContent = `Запись ${counter1} `; // Текст записи с уникальным номером

    // Создаем кнопку "Удалить" для этой записи
    const btn = document.createElement('button');
    btn.textContent = 'Удалить';
    btn.id = `but${counter1}`; // Уникальный id кнопки

    // Назначаем обработчик клика на кнопку "Удалить"
    btn.addEventListener('click', deleteElem);

    // Добавляем кнопку в элемент списка
    li.appendChild(btn);

    // Добавляем элемент списка в ul
    list.appendChild(li);

    // Увеличиваем счетчик записей
    counter1++;
}

// Функция удаления записи при нажатии на кнопку "Удалить"
function deleteElem(event) {
    event.target.parentElement.remove(); // Удаляем родительский элемент <li>
}

// Назначаем функцию init на событие загрузки страницы
window.addEventListener('DOMContentLoaded', init);
