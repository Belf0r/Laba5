// console.log("Задание 1")

// let blacklist = ["abobus@gmail.com", "qwerty1234@yandex.ru", "Darmidon@rambler.ru"]
// let emails = ["Chad@mail.com", "abobus@gmail.com", "qwerty1234@yandex.ru", "Gitguy@gmail.com", "Piter@yandex.ru",  "Darmidon@rambler.ru"]

// let filter = () => {
// return emails.filter((email) => !blacklist.includes(email))
// };
 
// console.log(filter())

// console.log("Задание 2")

// let calculate = (sum, count, promo = null) =>  {
//     if (promo == 'ДАРИМ300') {
//         sum -= 300
//             if (sum < 0) {
//             sum = 0
//             console.log("Сумма к оплате, после применения всех скидок: " + sum)
//             return sum
//             }
//         }
//     if (count >= 10) {
//         sum = sum - sum * 0.05
//     }
//     if (sum > 50000) {
//         sum -= sum - (sum - 50000) % 0.2
//     }
//     if (promo == 'СКИДКА15' && sum >= 20000) {
//         sum = sum - sum * 0.15
//     }
// console.log("Сумма к оплате, после применения всех скидок: " + sum)
// }

// calculate(50000, 17, 'ДАРИМ300')