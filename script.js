"use script";

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const title = books[4].querySelector('h2 > a');
const bookList2 = books[0].querySelectorAll('ul > li');
const bookList5 = books[5].querySelectorAll('ul > li');
const bookList6 = books[2].querySelectorAll('ul > li');


// Порядок книг
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

// Меняем фон
body.style.backgroundImage = 'url(./image/adv.jpg)';

// Исправляем заголовок
title.innerText = "Книга 3. this и Прототипы Объектов";

// Удаляем рекламу
document.querySelector('.adv').remove();

// Порядок глав
bookList2[3].after(bookList2[6], bookList2[8]);
bookList2[10].before(bookList2[2]);
bookList5[3].before(bookList5[9]);
bookList5[6].before(bookList5[2]);
bookList5[7].after(bookList5[5]);

// Добавляем новую главу

bookList6[9].insertAdjacentHTML("beforebegin", "<li>Глава 8: За пределами ES6</li>");


