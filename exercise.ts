// compiled languages: Java, Golang, C,C++ , C#, Rust     ==> compiling & running
/*
Compiled (Kompilyatsiya qilinadigan) tillar :
Bu tillarda yozgan kodingiz ishga tushishidan oldin maxsus dastur — Compiler (Kompilyator) yordamida yaxlit holatda mashina tiliga o'giriladi va .exe yoki tayyor binary fayl hosil qilinadi.
Ishlash tartibi: Kod ===>  Kompilyator ====> Mashina kodi (Tayyor fayl) ===> Ishga tushishi
Tezlik: Juda tez. Kompyuter kodingizni oldindan o'g'irib bo'lingan tayyor fayldan o'qiydi, shuning uchun bajarilish tezligi yuqori.
Xatoliklar: Kodda bitta xato bo'lsa ham kompilyatsiya to'xtaydi — dastur hatto ishga ham tushmaydi. Bu esa production'ga xatosizroq kod chiqishiga yordam beradi.
*/

/* interpreted languages: Node.js, Python, PHP, Ruby

Interpreted (Interpretatsiya qilinadigan) tillar
Bu tillarda kod oldindan o'girib qo'yilmaydi. Dastur ishga tushgan paytda Interpreter (Interpretator) kodingizni qatorma-qator (line-by-line) o'qib, o'sha onlarining o'zida mashina tiliga o'tkazadi va bajaradi.
Ishlash tartibi: Kod ==> Interpretator (qatorma-qator bajaradi) ==> Natija
Tezlik: nisbatan sekinroq. Chunki har safar dastur yurganda kodni qayta o'qib-yetkazish vaqt oladi.
Moslashuvchanlik: Kod platformaga bog'liq emas. Python yoki Node.js o'rnatilgan har qanday OS'da (Windows, Mac, Linux) bir xil kod ishlayveradi.

*/




const person1: string = "Steve";
let car: string = "Tesla";
const count: number = 100;

let stage : number | string = "hello"
stage = 100;


// object uchun soya
interface Person {
    name: string,
    age: number,
    nation: string
    gender?: string
}

const person : Person = {
    name: 'Martin',
    age: 24,
    nation: "uzbek"
}





let skills: string[];
skills = ["dhb", "begi","new"]




// Obyekt strukturasi uchun interfeys
interface User {
  readonly id: number;   // O'zgarmas ID
  name: string;
  email: string;
  age?: number;          // Ixtiyoriy parametr
}

// Interfeysga mos obyekt yaratish
const user: User = {
  id: 1,
  name: "Ali",
  email: "ali@example.com"
};




class Product {
  // Qisqartirilgan konstruktor (shaxsiy xususiyatlar avtomatik biriktiriladi)
  constructor(
    public readonly id: number,
    public name: string,
    private price: number
  ) {}

  // Metod
  public getPrice(): string {
    return `${this.price} USD`;
  }
}

// Meros olish (Inheritance)
class Electronics extends Product {
  constructor(id: number, name: string, price: number, public brand: string) {
    super(id, name, price);
  }
}

const laptop = new Electronics(101, "MacBook Air", 1000, "Apple");
console.log(laptop.getPrice()); // "1000 USD"
//console.log(laptop.price);  // Xato! 'price' private xususiyat
// user.id = 2; // Xato! readonly bo'lgani uchun o'zgartirib bo'lmaydi

 //https://www.typescripttutorial.net/


/*.    
ts-node va tsconfig-paths

ts-node — .ts fayllarni JavaScript'ga (.js) o'girmasdan, to'g'ridan-to'g'ri Node.js'da ishga tushirish uchun (development rejimi uchun).

tsconfig-paths — tsconfig.jsondagi @src/ yoki @controllers/ kabi qisqa import yo'llari (alias) ishga tushganda Cannot find module xatosini bermasligi uchun ularni to'g'rilab beradi.U bo'lmasa, Node.js yoki kompyuter TypeScript kodini qanday JavaScript'ga o'girishni, qaysi qoidalarga amal qilishni va qaysi fayllarni tekshirishni bilmaydi.

*/

/* 
Nega baribir JavaScript'ga o'giramiz? (Asosiy sabab)
Dunyodagi hech qaysi brauzer (Chrome, Safari, Firefox) va hech qaysi backend muhiti (Node.js, Bun) TypeScript kodini to'g'ridan-to'g'ri tushunmaydi va ishga tushira olmaydi.
Brauzerlar faqat JavaScriptni o'qiydigan va tushunadigan maxsus dvigatellarga (masalan, Chrome'dagi V8 dvigateli) ega.
Shu sababli, biz TypeScript'da qanchalik zo'r kod yozmaylik, brauzer uni ishga tushirishi uchun kodingiz  JavaScript'ga tarjima (transpilation/compilation) qilinishi shart.
*/



/*
nega typescriptda boshqa branchda ishlab productionda boshqa branchga otishimiz kk
*/


// architectural pattern : MVC, Dependency Injection, MVP
// design pattern: Middleware,Decotar
