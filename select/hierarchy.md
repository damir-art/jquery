# Иерархические CSS селекторы
https://damir-art.ru/jquery/ierarhicheskie-selektory-jquery/  
https://api.jquery.com/category/selectors/hierarchy-selectors/

- `$("sel sel")` - выбрать элементы потомки, в том числе и дочерние,
- `$("sel > sel")` - выбрать дочерний элемент, прямой потомок,
- `$("sel + sel")` - выбрать следующие элементы этого же уровня вложенности,
- `$("sel ~ sel")` - выбрать следующие и предыдущие элементы этого же уровня вложенности
