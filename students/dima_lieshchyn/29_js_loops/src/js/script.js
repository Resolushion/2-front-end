// --Мінімум--

//1.Запитай у користувача його вік і визначи, ким він є: дитиною (0-2),
//підлітком (12-18), дорослим (18_60) або пенсіонером (60 ...),
//передбач можливість введення невірних даних.
// const userAge = +prompt('Enter your age');
// const maxAge = 125;
// //http://cgon.rospotrebnadzor.ru/content/62/140 - ссылка на максимальный возраст:)
// let ageResult = '';
// if (userAge >= 0 && userAge < 3) {
//     ageResult = 'Дитина';
// } else if (userAge >= 12 && userAge < 19) {
//     ageResult = 'Підліток';
// } else if (userAge >= 18 && userAge < 61) {
//     ageResult = 'Дорослий';
// } else if (userAge >= 61 && userAge < maxAge + 1) {
//     ageResult = 'Пенсіонер';
// } else if (userAge < 0 || userAge > maxAge) {
//     ageResult = 'Неверный ввод';
// } else if (userAge >= 3 && userAge < 11) {
//     ageResult = 'Щось поміж дитиною та підлітком:)';
// } else {
//     ageResult = 'Введите цифры';
// }
// console.log(ageResult);


//2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
//який розташований на цій клавіші(1!, 2 @, 3 # і т.д).
// const userNum = +prompt('Введіть число від 0 до 9');
// switch (userNum) {
//     case 0:
//         console.log(')');
//         break;
//     case 1:
//         console.log('!');
//         break;
//     case 2:
//         console.log('@');
//         break;
//     case 3:
//         console.log('#');
//         break;
//     case 4:
//         console.log('$');
//         break;
//     case 5:
//         console.log('%');
//         break;
//     case 6:
//         console.log('^');
//         break;
//     case 7:
//         console.log('&');
//         break;
//     case 8:
//         console.log('*');
//         break;
//     case 9:
//         console.log('(');
//         break;
//     default:
//         console.log('Невірний ввод');
// }

//3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// const userIn = +prompt('Введіть початок діапазону');
// const userOut = +prompt('Введіть кінець діапазону');
// let summResult = 0;
// for (let i = userIn; i <= userOut; i++) {
//     summResult = summResult + i;
// }
// console.log(summResult);
//4.Запитай у користувача 2 числа і знайди найбільший спільний дільник.
const userFNum = +prompt('Введіть перше число');
const userSNum = +prompt('Введіть друге число');
console.log(userFNum % userSNum);

//5.Запитай у користувача число і виведи всі дільники цього числа.


// --Норма--

//1.Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.


//2.Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//1. від 200 до 300 - знижка буде 3%;
//2. від 300 до 500 - 5%;
//3. від 500 і вище - 7%.

//3.Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
//від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
//Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.


//4.Зацикли висновок днів тижня таким чином: «День тижня.
//Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.


// --Максимум--

//1.Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай
//його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
//записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
//Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100,
//поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 51 до 100.
//І так до тих пір, поки користувач не вибере == N.


//2.Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.


//3.Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
//Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
