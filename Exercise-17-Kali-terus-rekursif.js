function kaliTerusRekursif(angka) {
  // you can only write your code here!
  
  if(angka < 10){
      return angka
  } else if(angka >= 10){
      let string = angka.toString()
      let hasil = 1
      for(i=0;i<string.length;i++){
        hasil = hasil * string [i]
       } if(hasil >= 10){
           return kaliTerusRekursif(hasil)
       } else return hasil
  } 
  }


// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6