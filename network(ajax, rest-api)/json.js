// JSON формат.


// JSON.parse(); --десериализация.
// Метод принимает и второй, необязательный, аргумент– функция, 
// которая может влиять на результат преобразования.

const jsonData = '{"isAvailable":true,"list":[{"name": "All","count":43}]}';
const data = JSON.parse(jsonData, function (key, value) {
    if (key == "isAvailable") {
        return "Data is Available";
    } else {
        return value;
    }
});
console.log(data);



// JSON.stringify(); --сериализирует объект в JSON формат.

// В процессе сериализации происходит преобразование объекта 
// в текстовое представление, при этом действуют такие правила:
// - если у значения / поля которое сериализируется есть встроенный 
// метод toJSON(), то будет использоваться он вместо стандартного подхода;
// - функции всегда пропускаются;
// - нельзя сериализировать объекты, которые содержать ссылку на DOM.

// Второй параметр метода используется для указания элементов, 
// которые должны попасть в результирующий JSON.
// Это может быть как массив ключей, так и функция.

const data1 = {
    id: 12,
    name: "john",
    params: [12, 15],
    date: new Date(),
    calc: function () {
        return 12;
    }
}
const result = JSON.stringify(data1, ['id', 'name']);
console.log(result); // {"id":12,"name":"john"}

