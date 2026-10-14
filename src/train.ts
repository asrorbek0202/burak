/**TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda. **/
function countChars(word: string): Record<string, number> {
  const result: Record<string, number> = {};

  for (const char of word) {
    if (result[char]) {
      result[char] += 1; 
    } else {
      result[char] = 1;  
    }
  }

  return result;
}

console.log(countChars("hello")); 
/** TASK U

Shunday function tuzing, uni number parametri bo'lsin.Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.
MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda. **/

// function sumOdds(num: number): number{
// let count = 0;
//  for (let i = 0; i < num; i++){
// if (i%2!==0){ count++ }
// }
//  return count
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));
/**TASK     T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.**/

// function mergeSortedArrays(ary1: number[], ary2: number[]): number[]{
//  return ary1.concat(ary2).sort((x, y) => x - y);
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
/*
TASK S:

Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
*/
// function missingNumber(nums: number[]): number {
//   const n = nums.length;

//   for (let i = 0; i <= n; i++) {
//     if (!nums.includes(i)) {
//       return i;
//     }
//   }

//   return -1;
// }

// console.log(missingNumber([3, 0, 2, 1, 4, 6, 7])); 

/**
TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda. 
**/ 
// function calculate(ele: string): number{
//   const a = ele.split(" ")
//   .filter((item) => !isNaN(Number(item)))
//   .reduce((sum, item) => sum + Number(item), 0);
// return a
// }
// console.log(calculate("4 + 3"));
/**TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda

// **/
// function hasProperty(obj: Record<string, any>, prop: string): boolean {
//     return obj.hasOwnProperty(prop);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); 
// console.log(hasProperty({ name: "BMW", model: "M3" }, "color"));


/* 
TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/


// function objectToArray(obj: Record<string, any>): [string, any][] {
//     return Object.entries(obj);
// }
// console.log(objectToArray({ a: 10, b: 20 }));



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