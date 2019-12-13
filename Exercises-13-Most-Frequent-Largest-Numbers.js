
function sorting(arrNumber) {
  // code di sini
  var hasilSorting = arrNumber.sort(function(a , b){return a - b})
  return hasilSorting
}

function getTotal(arrNumber) {
  // code di sini
  if(arrNumber.length == 0){
      return "' '"
  }
  let hasilSorting = sorting(arrNumber)
  let countElement = []
  let hitung=1
  for(let i=0;i<arrNumber.length;i++){
    hitung = 0
    for(let j=0;j<arrNumber.length;j++){
        if(arrNumber[i] == arrNumber[j]){
            hitung = hitung + 1
        } 
    }
    countElement.push(hitung)
 }
    return "'angka paling besar adalah "+hasilSorting[arrNumber.length-1]+" dan jumlah kemunculan sebanyak "+countElement[arrNumber.length -1]+" kali'"
}


 function mostFrequentLargestNumbers(arrNumber) {
   var listSort = sorting(arrNumber);
   var countHighest = getTotal(listSort);
   return countHighest;
 }

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''