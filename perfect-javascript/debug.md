# Отладка
При отладки кода и решении ошибокпользуйтесь консолью чтобы отслеживать данные, кудать приходят, откуда уходят и т.д.

Когда ловите ошибку:
- сначала нужно понять стек вызовов функций, зашли вы в функцию или нет
- по какой цепочке прошло выполнение кода
- отслеживать ошибку по шагам
- вставлять console.log( переменная или 1 ) на пути отслеживания ошибки
- смотреть что выводит консоль, какие данные
По шагово, выводя в консоль, определяем то место, до которого программа работает нормально.

Поэтому скрипт делят на небольшие функции, чтобы легче было отследить ошибки, что при ходит в функцию, что выходит из функции.
