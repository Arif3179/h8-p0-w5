/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00
[RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
  formatUang(2000)
  output: Rp2.000,00
*/

function formatUang(number) {
 var stringNumber = number.toString()
 if(stringNumber.length <= 3){
   return "Rp"+stringNumber+",00"
 } else if(stringNumber.length > 3 && stringNumber.length <= 6){
   var diSplit = stringNumber.split("")
   diSplit.splice(stringNumber.length - 3,0,'.')
   var hasil = diSplit.join("")
   return "Rp"+hasil+",00"
 } else if(stringNumber.length >6 && stringNumber.length <=9){
  var diSplit = stringNumber.split("")
  diSplit.splice(stringNumber.length-6,0,'.')
  diSplit.splice((stringNumber.length-6)+4,0,'.')
  var hasil = diSplit.join("")
  return "Rp"+hasil+",00"
 }

}

 

console.log(formatUang(9000)); // Rp9.000,00
console.log(formatUang(15000)); // Rp15.000,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(250000)); // 250.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(5867938)); // Rp5.867.938,00
console.log(formatUang(15867938)); // Rp15.867.938
console.log(formatUang(125000000)); // Rp125.000.000,00