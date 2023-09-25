// Исправьте функцию sendRequest
// Аргументы функции:
// - имя клиента
// - телефон клиента
// - объект с адресом доставки: {street, house, entrance, floor, flat}
// - список товаров в заказе
// - стоимость заказа с учетом скидок и доставки
// Как результат функции требуется вернуть JSON,
// cформированный в соответствии с правилами:
// Объект data содержит все данные
// В объекте data есть свойства:
// - client - строка, имя клиента + телефон клиента;
// - order - объект, содержащий данные о заказе:
//     - address - строка с адресом доставки, записанным человекопонятным языком (как в примере)
//     - sum - стоимость заказа с учетом скидок и доставки
// - goods: массив объектов с информацией о позициях заказа:
//     - title - название позиции
//     - count - количество в заказе
// например:
// {
//    "data": {
//      "client": "Иван +7(987)65-43-210",
//      "order": {
//        "address": "ул. Ленина, дом 2, 4 подъезд, 5 этаж, кв. 53",
//        "sum": 900
//       },
//       "goods": [
//         {
//           "title": "Пицца",
//           "count": 2
//         }
//      ]
//    }
// }

function sendRequest(name, phone, address, goods, sum) {
    // Создаем объект data, который будет содержать все данные
    let data = {
        client: `${name} ${phone}`,
        order: {
            address: `ул. ${address.street}, дом ${address.house}, ${address.entrance} подъезд, ${address.floor} этаж, кв. ${address.flat}`,
            sum: sum
        },
        goods: []
    };

    // Заполняем массив goods с информацией о позициях заказа
    for (let i = 0; i < goods.length; i++) {
        data.goods.push({ title: goods[i].title, count: goods[i].count });
    }

    // Создаем объект, содержащий данные о клиенте, заказе и товарах
    let jsonData = JSON.stringify({ data: data });

    return jsonData;
}

// Пример использования функции:
const name = "Иван";
const phone = "+7(987)65-43-210";
const address = {
    street: "Ленина",
    house: 1,
    entrance: 4,
    floor: 5,
    flat: 53
};
const goods = [{ title: "Пицца", count: 2 }];
const sum = 900;

const requestData = sendRequest(name, phone, address, goods, sum);
console.log(requestData);