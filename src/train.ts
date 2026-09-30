/* 
TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/


function objectToArray(obj: Record<string, any>): [string, any][] {
    return Object.entries(obj);
}
console.log(objectToArray({ a: 10, b: 20 }));



/*. 
TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/
// function calculateSumOfNumbers(ary: any[]): number {
//     let yigindi = 0;

//     for (let element of ary) {
//         if (typeof element === "number") {
//             yigindi += element;
//         }
//     }

//     return yigindi;
// }

// console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35])); 

/*Project Standards:
  - Logging standards
  - Naming standards
    function , method, variable => camel      goHome
    class ==> pascal.     MemberService
    folder ==> kebab 
    css ==> snake.         button_style
  - Error handling


  traditional API
  rest API
  GraphQL API 
*/

// TASK N:
// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function palindromCheck(word: string): boolean{
//     const yangiSoz = word.split("").reverse().join(""); 
//     return yangiSoz === word;
// }

// console.log(palindromCheck("dad")); 
// console.log(palindromCheck("son"));

/*
TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/
// interface Raqam {
//   son: number
//   kvadrat: number
// }

// function getSquareNumbers(ary: number[]): Raqam[] {
//   return ary.map((code) => {
//     return {
//       son: code,
//       kvadrat: code ** 2
//     };
//   });
// }

// console.log(getSquareNumbers([1, 2, 3]));



// TASK L: 
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(matn: string): string {
//   return matn
//     .split(" ") 
//     .map(word => word.split("").reverse().join("")) 
//     .join(" "); 
// }

// console.log(reverseSentence("we like coding!"));