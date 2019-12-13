 function changeVocals (str) {
   //code di sini
   let output = ""
   for(i=0;i<str.length;i++){
     if(str[i] == "a" || str[i] == "i" || str[i] == "u" || str[i] == "e" || str[i] == "o" || str[i] == "A" || str[i] == "I" || str[i] == "U" || str[i] == "E" || str[i] == "O"){
         output = output+ String.fromCharCode(str[i].charCodeAt()+1)
     } else output = output+str[i]
   } return output
}

function reverseWord (str) {
    //code di sini
    let output = ""
    for(i=str.length - 1;i>=0;i--){
     output=output+str[i]
    } return output
  }

 function setLowerUpperCase (str) {
   //code di sini
   let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
   let output = ""
   for(i=0;i<str.length;i++){
    for(j=0;j<alphabet.length;j++){
        if(str[i] == alphabet[j] && j < 26){
            output=output+alphabet[j+26]
        } else if(str[i]==alphabet[j] && j > 25){
            output=output+alphabet[j-26]
        }
    }        
   }return output
 }
function removeSpaces (str) {
  //code di sini
  let output = ""
  for(i=0;i<str.length;i++){
      if(str[i] == " "){
        output=output+""
      }else output=output+str[i]
  } return output
}

function passwordGenerator (name) {
   //code di sini
   if(name.length < 5){
       return 'Minimal karakter yang diinputkan adalah 5 karakter'
   }
   var temp1 = changeVocals(name)
   var temp2 = reverseWord(temp1)
   var temp3 = setLowerUpperCase(temp2)
   var hasil = removeSpaces(temp3)
   return hasil 
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'