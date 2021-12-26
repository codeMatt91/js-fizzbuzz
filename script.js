console.log('JS ok')

/*
TRACCIA:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

*/



const writeNumber = document.getElementById('write-number')

let number = '';

for (let i=1; i <= 100; i++) {

   if ((i % 3 === 0) && (i % 5 === 0 )) {
      number += `FizzBuzz`
   } else if (i % 3 === 0) {
      number += `Fizz ` ;
   } else if (i % 5 === 0 ) {
      number += `Buzz `;
   }else {
      number += `${i} `;
   } 
   console.log(number);
}


writeNumber.innerText = number;