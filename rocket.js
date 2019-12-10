/**
 * ====================
 * Balance those words!
 * ====================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengecek apakah jumlah kata yang diterima function muncul
 * dengan jumlah frekuensi yang sama.
 * 
 * Function menerima 1 parameter @str yang merupakan sebuah kalimat dan me-return:
 * true -> jika seluruh kata yang muncul memiliki frekuensi yang sama
 * false -> jika jumlah kata yang muncul berbeda
 * 
 * Example
 * -------
 * 1. var @str = 'kita hanya teman'
 * karena kata kita, hanya, dan teman semuanya muncul sekali, maka @output = true
 * 
 * 2. var @str = 'buat apa susah susah itu tak ada gunanya'
 * kata susah muncul 2x dan sisanya muncul sekali, maka @output = false
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function:
 *    split, slice, splice, substring, substr, reduce, filter, map, includes, indexOf, lastIndexOf, some, every
 */

function word(str) {
  var tempKata = []
  for (let i=0;i<str.length;i++){
    if(str[i] == ' ' || i == str.length-1){
      tempKata.push([])
    }     
} let indexKata = 0 
for(let j=0;j<str.length;j++){
  if(str[j]!=" "){
    tempKata[indexKata].push(str[j])
    } else if(str[j] == " "){
      indexKata += 1
    }
  }
let tempKata1 = []  
for(let k=0;k<tempKata.length;k++){
  tempKata1.push(tempKata[k].join(""))
}
let tempKata2 = []
for(let a=0;a<tempKata1.length;a++){
    var unik = true
    for(b=0;b<tempKata2.length;b++)
    if(tempKata1[a] == tempKata2[b][0]){
      tempKata2[b][1]++
      unik = false
    }
    if(unik){
      tempKata2.push([tempKata1[a], 1])
    }  
}
let tempAngka1 = []
for (let b=0;b<tempKata2.length;b++){
    tempAngka1.push(tempKata2[b][1])  
  }
tempAngka1.sort(function(a,b){return a-b})
if(tempAngka1[0] == tempAngka1[tempAngka1.length -1]){
  return true
} else { return false
}
}


console.log(word('saya')) 
// true
console.log(word('saya kamu')) 
// true
console.log(word('saya makan saya')) 
// false
console.log(word('aku tahu kamu tahu aku tapi kamu tahu kamu tapi aku tahu tapi aku kamu tapi')) 
// true
console.log(word('kuku kaki kuku kaki kaka kaka kaku kaku')) 
// true
console.log(word('botak tabok batak botak tabok batak botak tabok batak botak tabok batak botak batok batak botak tabok batak botak tabok batak botak tabok batuk botak tabok batak botak tabok batak botak tabok batak'))
// false
console.log(word('cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh kencur cangkir kencur cengkeh cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh cangkir kencur cengkeh kencur cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cengkeh'))
//true