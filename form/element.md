# Элементы
Манипуляции над элементами форм.

## radio

    <div class="form__radio form__element">
        <label><input name="sex" type="radio" value="male">Male</label>
        <label><input name="sex" type="radio" value="female">Female</label>
    </div>

    $("input[type=radio][name=sex][value=female]").prop("checked", true)

## checkbox

    <div class="form__element form__checkbox">
        <label><input name="fruit" type="checkbox" value="apple">Яблоко</label>
        <label><input name="fruit" type="checkbox" value="orange">Апельсин</label>
    </div>

    $("input[type=checkbox][name=fruit][value=apple]").prop("checked", true)

## select

    $(".form__wrap").append('<select name="role"></select>');
    var $select = $(".form__wrap select[name=role]");
    $select.append("<option>Admin</option>");
    $select.append("<option>Manager</option>");
    $select.append("<option>User</option>");
    // $select.val("Manager"); // выбираем Manager
    // $select.find("option:eq(2)").prop("selected", true); // выбираем User

    // Преобразуем в multiple
    // $select.attr("size",
    //     $select.find("option").length
    // );
    // $select.attr('multiple', true);

    // $select.find("option").remove(); // очищаем список

## Разное
Проверяем на `checked`:

    $("input[type=checkbox]").is(":checked")
