"use strict";

(function () {
  //--Мінімум--
  //1.Напиши всі можливі варіанти створення функцій.
  //function declaration statement
  function func(a) {
    return a;
  } //function definition expression


  var a = function a(_a) {
    return _a;
  }; //arrow function expression


  var b = function b(a) {
    return a;
  };

  var c = function c(a) {
    return a;
  };

  var d = function d() {
    return d;
  }; //--------------------------------------------------------------------------------
  //2.Створи функцію, яка буде виводити кількість переданих їй аргументів.


  function argcount() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args;
  }

  show(argcount(3, 4, 5)); //--------------------------------------------------------------------------------
  //3. Напиши функцію, яка приймає 2 числа і повертає :
  //1. -1, якщо перше число менше, ніж друге;
  //2.  1 - якщо перше число більше, ніж друге;
  //3.  0 - якщо числа рівні.

  function foo() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    a = +a;
    b = +b;

    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    } else {
      return 0;
    }
  }

  show(foo('1', 2)); //--------------------------------------------------------------------------------
  //4. Напиши функцію, яка обчислює факторіал переданого їй числа.

  function factorial() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    if (c <= 0) return 'Число должно быть положительным\nили больше нуля';

    for (var i = c - 1; i > 0; i--) {
      c = c * i;
    }

    return c;
  }

  show(factorial(5)); //--------------------------------------------------------------------------------
  //5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
  //Наприклад: цифри 1, 4, 9 перетворяться в число 149.

  function trinum() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    return String(a) + String(b) + String(c);
  }

  show(trinum(1, 2, 3)); //--------------------------------------------------------------------------------
  //6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
  //Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

  function flength() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    a = +a;
    b = +b;

    if (a === 0) {
      return b * b;
    } else if (b === 0) {
      return a * a;
    } else {
      return a * b;
    }
  }

  show(flength(2)); //--------------------------------------------------------------------------------
  //--Максимум--
  //1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
  //Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

  function perfect(a) {
    a = +a;

    if (a > 0) {
      var sum = 0;

      for (var i = a; i >= 0; i--) {
        if (a % i == 0) {
          sum = sum + a / i;
        }
      }

      sum = sum - a;

      if (sum === a) {
        return 'Perfect number';
      } else {
        return 'Not perfect';
      }
    } else {
      return 'Need bigger number';
    }
  }

  show(perfect(6)); //--------------------------------------------------------------------------------
  //2.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
  //і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися,
  //чи є це число досконалим.

  function perfectnums() {
    var minN = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var maxN = arguments.length > 1 ? arguments[1] : undefined;
    minN = +minN;
    maxN = +maxN;
    var count = '';

    if (maxN < minN) {
      return 'Максимальное число должно быть больше';
    } else {
      for (var i = minN; i <= maxN; i++) {
        if (perfect(i) === 'Perfect number') {
          count = count + String(i) + ' | ';
        }
      }
    }

    return count;
  }

  show(perfectnums(2, 29)); //--------------------------------------------------------------------------------

  function show(a) {
    console.log(a);
  }
})();