# Оптимизация
Оптимизация кода, рефакторинг, масштабируемость, модульность и т.п.

- Весь повторяющийся код нужно выносить в переменные, функции, циклы
- циклом обходим элементы на которые вешаем одно и тоже событие
- функцию обработчик делаем именной, если обработчки похожи и т.д.
- Переменные лучше выносить из функции выше к родителю, например в обработчиках событий
