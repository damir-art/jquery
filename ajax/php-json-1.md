# PHP JSON
https://snipp.ru/php/json-php  

JSON (JavaScript Object Notation) – текстовый формат обмена данными, основанный на JavaScript, который представляет собой набор пар {ключ: значение}. Значение может быть массивом, числом, строкой и булевым значением.

В PHP поддержка JSON появилась с версии 5.2.0 и работает только с кодировкой UTF-8.

## json_encode()
`json_encode($value, $options)` - кодирует массив или объект в JSON.

    $array = array(
      '1' => 'Значение 1', 
      '2' => 'Значение 2', 
      '3' => 'Значение 3', 
      '4' => 'Значение 4', 
      '5' => 'Значение 5'
    );
    
    $json = json_encode($array);
    echo $json;

Кирилические символы выводятся как `\u0417`, поэтому нужно использовать второй параметр `JSON_UNESCAPED_UNICODE`.

    $json = json_encode($array, JSON_UNESCAPED_UNICODE);
    echo $json;

Далее эту строку сохраняем в файл или передаём в браузер (например при запросах):

    header('Content-Type: application/json');
    echo $json;
    exit();

## json_decode()
`json_decode($json)` - декодирование, преобразует строку в объект или массив.

Прелбразовать строку в объект:

    $json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
    $a = json_decode($json);

    echo '<pre>';
    print_r($a);
    echo '</pre>';

Прелбразовать строку в массив (добавис вторым аргументом `true`):

    $json = '{"1":"Значение 1","2":"Значение 2","3":"Значение 3","4":"Значение 4","5":"Значение 5"}';
    $a = json_decode($json, true);

    echo '<pre>';
    print_r($a);
    echo '</pre>';

## Получение ошибок и их исправление
json_decode() возвращает NULL, если в объекте есть ошибки, посмотреть их можно с помощью функции json_last_error() - возвращает последнюю ошибку (если она есть), произошедшую во время последнего кодирования/декодирования JSON если при вызове не использовался флаг JSON_THROW_ON_ERROR:

    // Пропущена запятая
    $json = '{"1:"Значение 1"}';
    $array = json_decode($json, true);

    switch (json_last_error()) {
      case JSON_ERROR_NONE:
        echo 'Ошибок нет';
      break;
      case JSON_ERROR_DEPTH:
        echo 'Достигнута максимальная глубина стека';
      break;
      case JSON_ERROR_STATE_MISMATCH:
        echo 'Некорректные разряды или несоответствие режимов';
      break;
      case JSON_ERROR_CTRL_CHAR:
        echo 'Некорректный управляющий символ';
      break;
      case JSON_ERROR_SYNTAX:
        echo 'Синтаксическая ошибка, некорректный JSON';
      break;
      case JSON_ERROR_UTF8:
        echo 'Некорректные символы UTF-8, возможно неверно закодирован';
      break;
      default:
        echo 'Неизвестная ошибка';
      break;
    }

Посмотреть значения констант JSON:

    $constants = get_defined_constants(true);
    foreach ($constants['json'] as $name => $value) {
      echo $name . ': ' . $value . '<br />';
    }

Если вы хотите распарсить JS объект из HTML страницы или файла, то скорее всего json_decode вернет ошибку т.к. в коде будут управляющие символы или BOM. Удалить их можно следующим образом:

    $json = '{...}';
    
    // Удаление управляющих символов
    for ($i = 0; $i <= 31; ++$i) { 
      $json = str_replace(chr($i), '', $json); 
    }
    
    // Удаление символа Delete
    $json = str_replace(chr(127), '', $json);
    
    // Удаление BOM
    if (0 === strpos(bin2hex($json), 'efbbbf')) {
      $json = substr($json, 3);
    }
    
    $res = json_decode($json, true);
    print_r($res);

## HTTP-запросы в формате JSON
Некоторые сервисы требуют чтобы запросы к ним осуществлялись в формате JSON, такой запрос можно сформировать в CURL:

    $data = array(
      'name' => 'snipp.ru'
      'text' => 'Отправка сообщения',
    );
    
    $ch = curl_init('https://example.com');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 	
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    $res = curl_exec($ch);
    curl_close($ch);

А также могут обратится к вашим скриптам в таком формате, чтение JSON запроса:

    $data = file_get_contents('php://input');
    $data = json_decode($data, true);
