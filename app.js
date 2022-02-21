let input = document.getElementById('input');
let btn = document.getElementById('getNumbers');
let result = document.getElementById("result");
let rst = document.getElementById("rst");


btn.addEventListener('click', function () {
    result.innerHTML = "";


    var numbers = [];

    for (let i = 0; i < input.value; i++) {
        for (var j = 0; numbers.length < 6; j++) {
        let number = Math.floor(Math.random() * 90) + 1;
        if(numbers.includes(number)) {
            continue
        }else{
            numbers.push(number);
        }             
        
    }

let sorted = numbers.sort((a,b) => a - b)

for (var k = 0; numbers.length < 7; k++) {
    let number = Math.floor(Math.random() * 90) + 1;
    if(numbers.includes(number)) {
            continue
        }else{
            numbers.push(number);
        } 
  }
  numbers.push(Math.trunc(Math.random() * 90) + 1);

result.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+ '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + numbers[6]+ '   |   ' + numbers[7] ;
result.innerHTML += '<hr>';
numbers = [];
        
    }
});

rst.addEventListener("click", ()=>{
    
    input.value ="";
    result.innerHTML = "";
})















// let input = document.getElementById("input");
// let getNumbers = document.getElementById("getNumbers");
// let rst = document.getElementById("rstBtn");
// let result = document.getElementById("result");

// getNumbers.addEventListener('click', ()=> {
//     result.innerHTML = "";


//     var luckyNumbers = [];

//     for (let i = 0; i < input.value; i++) {  //to form the wanted numbers of tickets.top to bottom
//         for (let j = 0; luckyNumbers.length < 6; j++) {   // to form the lucky numbers.left to right
//         let randomNum = Math.floor(Math.random() * 90) + 1;  //to form a random number
//         if(luckyNumbers.indexOf(randomNum) === -1) {   //to determine whether numbers consist of  random number 
//             luckyNumbers.push(randomNum);   //if not, add the number to the numbers array.
//         }
//     }
    
// let sorted = luckyNumbers.sort((a,b) => a - b)

// for (var k = 0; luckyNumbers.length < 7; k++) {  //to find the joker number, must be different from first 6 numbers.
//     let randomNum = Math.floor(Math.random() * 90) + 1;
//     if(luckyNumbers.indexOf(randomNum) === -1) {  //it cant be the same numbers.
//         luckyNumbers.push(randomNum);
//     }
//   }
//   luckyNumbers.push(Math.trunc(Math.random() * 90) + 1);  //to get the superstar number (ıt can be any number between 1-90)

// result.innerHTML += sorted[0]+ '-' + sorted[1]+ '-' + sorted[2]+ '-' + sorted[3]+ '-' + sorted[4]+ '-' + sorted[5]+ ' |     ' + luckyNumbers[6]+ '   |   ' + luckyNumbers[7] + '<br>';
// result.innerHTML += '<hr>';

//     }
// });


// rst.addEventListener("click", ()=>{
//     luckyNumbers = [];
//     result.innerHTML =""
//     input.value = []
// });

        
    



