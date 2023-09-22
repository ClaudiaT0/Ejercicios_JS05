/**
 * User profile
 Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
 Store the information and then showcase it in the console. 
 Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.
 */
function datosPersona(username, age, movie){
    //console.log(`Esribe tu usuario ${username}`)
    //console.log(`Esribe tu edad ${age}`)
    //console.log(`Esribe tu movie ${movie}`)
    console.log(`The film: ${movie} is one of my favorite`)
}

/**
 * Highest number
Write a program that asks for 10 numbers. 
Using logical operators and any other javascript
functions/structures you've seen before, 
determine and output the highest of those numbers.
 * 
 */
  /*let num1= 20;
  let num2= 15;
   listaNumeros=[num1,num2,]
    let aux = 0 
    if(num1>num2){
      aux=num1
      console.log("el valor más alto es: "+ aux)
    }*/

    function ordenarNum (numUno,numDos,numTres, numCuatro, numCin, numSeis  ){
      let listaNum = [numUno,numDos,numTres, numCuatro, numCin, numSeis];
      let n, i, k, aux;
      n = listaNum.length;
      console.log(listaNum); 
      for (k = 1; k < n; k++) {
          for (i = 0; i < (n - k); i++) {
              if (listaNum[i] > listaNum[i + 1]) {
                  aux = listaNum[i];
                  listaNum[i] = listaNum[i + 1];
                  listaNum[i + 1] = aux;
              }
          }
      }
  
      console.log("El número más alto es: " + listaNum.length); 
    }

/**
 * Alarm
Write a program that asks a user for the amount of seconds 
needed until an alarm (message) is executed alongside a text 
to show once those seconds have passed in real time.
Result example: "Time for bed after 10 seconds".
 */
console.log("Proporcione tiempo")
function programAlarm(time) {
  second= time/1000
  setTimeout(() => console.log('Time for bed after '+ second +' seconds'), time)
  }

/**
 * Palindrome
 Write a program that prompts for a word or sentence
 (it can be capitalized, have spaces and punctuation). 
 Figure out if the sentence/word is a palindrome or not.
 Ignoring punctuation, spaces and capitalized letters.
 */



 /**
  * Factorial
  Write a program that prompts for an intenger number n.
  Where  1 <= n. Solve this using recursion.
  */

/**
 * Flat array
Write a program that takes the following nested matrix and flattens it
(makes it a 1D array). Use any type of algorithm you want like callbacks, 
recursion, etc...
 */