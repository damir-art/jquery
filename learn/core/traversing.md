# Traversing (обход)
После того, как вы сделали выборку с помощью jQuery, вы можете углубиться в то, что только что было выбрано. Траверс можно разбить на три основные части: `parents`, `children`, and `siblings`. jQuery имеет множество простых в использовании методов для всех этих частей. Обратите внимание, что каждому из этих методов можно дополнительно передать строковые селекторы, а некоторые также могут принимать другой объект jQuery, чтобы отфильтровать ваш выбор. Обратите внимание и обратитесь к документации API по обходу, чтобы узнать, какие варианты аргументов у вас есть: 

https://api.jquery.com/category/traversing/  
https://api.jquery.com/category/traversing/tree-traversal/

## Parents
Методы поиска родителей из выборки включают `.parent()`, `.parents()`, `.parentsUntil()` и `.closest()`.

    <div class="grandparent">
      <div class="parent">
        <div class="child">
          <span class="subchild"></span>
        </div>
      </div>
      <div class="surrogateParent1"></div>
      <div class="surrogateParent2"></div>
    </div>

Выбор прямого родителя элемента:

    // Selecting an element's direct parent:
    // returns [ div.child ]
    $( "span.subchild" ).parent();

Выбор всех родителей элемента, соответствующих данному селектору:

    // Selecting all the parents of an element that match a given selector:
    // returns [ div.parent ]
    $( "span.subchild" ).parents( "div.parent" );

    // returns [ div.child, div.parent, div.grandparent ]
    $( "span.subchild" ).parents();

Выбор всех родителей элемента до, но *не включая* селектор:

    // Selecting all the parents of an element up to, but *not including* the selector:
    // returns [ div.child, div.parent ]
    $( "span.subchild" ).parentsUntil( "div.grandparent" );

Выбор ближайшего родителя, обратите внимание, что будет выбран только один родитель и что сам начальный элемент включен в поиск:

    // Selecting the closest parent, note that only one parent will be selected
    // and that the initial element itself is included in the search:

    // returns [ div.child ]
    $( "span.subchild" ).closest( "div" );

    // returns [ div.child ] as the selector is also included in the search:
    $( "div.child" ).closest( "div" );

## Children
Методы поиска дочерних элементов в выборке включают `.children()` и `.find()`. Разница между этими методами заключается в том, насколько далеко в дочерней структуре делается выбор. `.children()` работает только с прямыми дочерними узлами, в то время как `.find()` может рекурсивно переходить к дочерним узлам, дочерним элементам этих дочерних узлов и т.д.

Выбор прямых дочерних элементов, элемента:

    // Selecting an element's direct children:
    // returns [ div.parent, div.surrogateParent1, div.surrogateParent2 ]
    $( "div.grandparent" ).children( "div" );

Поиск всех элементов в пределах вфборки, соответствующих селектору:

    // Finding all elements within a selection that match the selector:
    // returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
    $( "div.grandparent" ).find( "div" );

## Siblings
Все остальные методы обхода в jQuery связаны с поиском одноуровневого выбора. Есть несколько основных методов, касающихся направления обхода. Вы можете найти предыдущие элементы с помощью `.prev()`, следующие элементы с помощью `.next()` и оба с помощью `.siblings()`. Есть также несколько других методов, основанных на этих основных методах: `.nextAll()`, `.nextUntil()`, `.prevAll()` и `.prevUntil()`.

    // Selecting a next sibling of the selectors:
    // returns [ div.surrogateParent1 ]
    $( "div.parent" ).next();

    // Selecting a prev sibling of the selectors:
    // returns [] as No sibling exists before div.parent
    $( "div.parent" ).prev();
    
    // Selecting all the next siblings of the selector:
    // returns [ div.surrogateParent1, div.surrogateParent2 ]
    $( "div.parent" ).nextAll();

    // returns [ div.surrogateParent1 ]
    $( "div.parent" ).nextAll().first();

    // returns [ div.surrogateParent2 ]
    $( "div.parent" ).nextAll().last();

    // Selecting all the previous siblings of the selector:
    // returns [ div.surrogateParent1, div.parent ]
    $( "div.surrogateParent2" ).prevAll();

    // returns [ div.surrogateParent1 ]
    $( "div.surrogateParent2" ).prevAll().first();

    // returns [ div.parent ]
    $( "div.surrogateParent2" ).prevAll().last();

Используйте `.siblings()` для выбора всех соседних элементов:

    // Selecting an element's siblings in both directions that matches the given selector:
    // returns [ div.surrogateParent1, div.surrogateParent2 ]
    $( "div.parent" ).siblings();
    
    // returns [ div.parent, div.surrogateParent2 ]
    $( "div.surrogateParent1" ).siblings();

Полную документацию по этим и другим методам см. в документации Traversal на сайте api.jquery.com.

Будьте осторожны при прохождении больших расстояний в документах - сложный обход требует, чтобы структура документа оставалась неизменной, что трудно гарантировать, даже если вы сами создаете все приложение от сервера до клиента. Одно- или двухшаговый обход - это нормально, но лучше избегать обходов, которые переходят от одного контейнера к другому.
