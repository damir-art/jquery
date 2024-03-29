# Insert
https://api.jquery.com/category/manipulation/dom-insertion-outside/  
https://api.jquery.com/category/manipulation/dom-insertion-inside/  
https://api.jquery.com/category/manipulation/dom-insertion-around/

Вставка элементов. Вставлять можно как созданный элемент `$(" <p>Paragraph</p> ")` так и набор элементов `$(" el ")`.

## Insert outside
Вставка во вне.

Вставка контента во вне существующего элемента:
`.after()` - вставить содержимое, указанное параметром, после каждого элемента в наборе совпадающих элементов,
`.before()` - вставить содержимое, указанное параметром, перед каждым элементом в наборе совпадающих элементов,
`.insertAfter()` - вставить каждый элемент в набор совпадающих элементов после цели,
`.insertBefore()` - вставить каждый элемент в набор совпадающих элементов перед целью.

## Insert inside
Вставка во внутрь.

Вставка контента внутрь существующего элемента:
- `.append()` - вставить содержимое, указанное параметром, в конец каждого элемента в наборе совпадающих элементов,
- `.appendTo()` - вставить каждый элемент в набор совпадающих элементов до конца цели,
- `.prepend()` - вставить содержимое, заданное параметром, в начало каждого элемента в наборе совпадающих элементов,
- `.prependTo()` - вставить каждый элемент в набор совпадающих элементов в начало цели.

Работа с содержимым (текст, HTML):
- `.text()` -  получить комбинированное текстовое содержимое каждого элемента в наборе совпадающих элементов, включая их потомков, или задайте текстовое содержимое совпадающих элементов,
- `.html()` - получить HTML-содержимое первого элемента в наборе совпавших элементов или задать HTML-содержимое каждого совпавшего элемента. *(Also in: Attributes)*,

## Insert around
Вставка вокруг.

Вставка контента вокруг существующего элемента:
- `wrap()` - обернуть структуру HTML вокруг каждого элемента в наборе совпадающих элементов,
- `wrapAll()` - обернуть структуру HTML вокруг всех элементов в наборе совпадающих элементов,
- `wrapInner()` - обернуть структуру HTML вокруг содержимого каждого элемента в наборе совпавших элементов,
- `unwrap()` - удалить родительский набор совпадающих элементов из DOM, оставив совпавшие элементы на их месте *(Also in: Manipulation > DOM Removal)*.
