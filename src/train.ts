// TASK L: 
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

function reverseSentence(matn: string): string {
  return matn
    .split(" ") 
    .map(word => word.split("").reverse().join("")) 
    .join(" "); 
}

console.log(reverseSentence("we like coding!"));