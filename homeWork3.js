// 1

//function makeNegative(num) {
  //if (num <= 0) {
   // return num;
 // } else {
  //  return num * -1;
 // }
//};

//console.log(makeNegative(0,12));

2

// function rockPaperScissors(player1, player2) {
//     if (player1 === "scissors" && player2 === "paper") {
//       return "Player 1 won!";
//     } else if (player1 === "paper" && player2 === "rock") {
//         return "Player 1 won!";
//    } else if (player1 === "rock" && player2 === "scissors") {
//        return "Player 1 won!";
//     } else if (player1 === "scissors" && player2 === "rock") {
//         return "Player 2 won!";
//     } else if (player1 === "rock" && player2 === "paper") {
//         return "Player 2 won!";
//     } else if (player1 === "paper" && player2 === "scissors") {
//         return "Player 2 won!";
//    } else if (player1 === "paper" && player2 === "paper") {
//        return "Draw!";
//     } else if (player1 === "scissors" && player2 === "scissors") {
//         return "Draw!";
//     } else if (player1 === "rock" && player2 === "rock") {
//             return "Draw!";
//    } else (player1 === "car" && player2 === "paper") 
//        return "unknown sign";
    
// };

// console.log(rockPaperScissors("paper", "rock"));
// console.log(rockPaperScissors("scissors", "scissors"));
// console.log(rockPaperScissors("scissors", "rock"));


// 3 проба 2 


// var numbers = [5, 10, 15, 20, -50];
// var sum = 0;
 
// numbers.forEach(function(num) {
//     if (num > 0) {
//         num = num
//     }
//     else  {
//         num = 0
//     }
//     sum = sum + num;
// });
 
// console.log(sum); // 50

// 4

// function countBy(x, n) {
//     let z = [];
//     for (i = 1; i <= n; ++i) {
//       z.push(i * x);
//     }
//     return z;
//   }
  
//   console.log(countBy(4, 5));

// 5


// function trafficlightNextColors(currentColor, n) {
//   const colors = ["red", "yellow", "green", "yellow"];
//     let currentIndex = colors.indexOf(currentColor);

//     if (currentIndex === -1) {
//       return "Invalid color"
//     }
  
//     let result = [];
//     for (let i = currentIndex + 1; i <= currentIndex + n; i++) {
      
//         result.push(colors[i%4]);
//       }
    
//           return result
//         }
//            console.log(trafficlightNextColors("yellow", 6));
//            console.log(trafficlightNextColors("red", 3));


// 5.2

function trafficlightNextColors(currentColor, n) {
    const colors = ["red", "yellow", "green", "yellow"];
      let currentIndex = colors.indexOf(currentColor);
  
      if (currentIndex === -1) {
        return "Invalid color"
      }
    
      let result = " ";
      for (let i = 0; i < n ; i++) {

           result = result + " " + colors[(i + (currentIndex + 1)) % colors.length]
          }
          
            return result
          }
             console.log(trafficlightNextColors("yellow", 3));
             console.log(trafficlightNextColors("red", 5));
             console.log(trafficlightNextColors("green", 10));


// 2 new

// function rockPaperScissors(player1, player2) {
//     const sing = ["scissors", "paper", "rock"];
//     let currentIndex1 = sing.indexOf(player1);
//     let currentIndex2 = sing.indexOf(player2);
//     if (player1 === "scissors" && player2 === "paper") {
//       return "Player 1 won!";
//     } else if (player1 === "paper" && player2 === "rock") {
//         return "Player 1 won!";
//    } else if (player1 === "rock" && player2 === "scissors") {
//        return "Player 1 won!";
//     } else if (player1 === "scissors" && player2 === "rock") {
//         return "Player 2 won!";
//     } else if (player1 === "rock" && player2 === "paper") {
//         return "Player 2 won!";
//     } else if (player1 === "paper" && player2 === "scissors") {
//         return "Player 2 won!";
//    } else if (currentIndex1 === currentIndex2) {
//        return "Draw!";
//       } else (currentIndex1 === -1) 
//        return "unknown sign";
    
// };

// 2 new.new

// function rockPaperScissors(player1, player2) {
//     const sing = ["scissors", "paper", "rock"];
//     let currentIndex1 = sing.indexOf(player1);
//     let currentIndex2 = sing.indexOf(player2);
//     if (currentIndex1 === currentIndex2) {
//         return "Draw"
//     } else if (currentIndex1 === -1) {
//         return "unknown sign" 
//     } else if (currentIndex2 === -1) {
//         return "unknown sign" 
//     } else if ((currentIndex1 === 0 && currentIndex2 === 1 || currentIndex1 === 1 && currentIndex2 === 2 || currentIndex1 === 2 && currentIndex2 === 0)) {
//         return "Player 1 won!"
//     } else ((currentIndex1 === 1 && currentIndex2 === 0 || currentIndex1 === 2 && currentIndex2 === 1 || currentIndex1 === 0 && currentIndex2 === 2))
//     return "Player 2 won!"
// }
// console.log(rockPaperScissors("scissors", "paper"));
// console.log(rockPaperScissors("paper", "rock"));
// console.log(rockPaperScissors("rock", "scissors"));
// console.log(rockPaperScissors("scissors", "rock"));
// console.log(rockPaperScissors("paper", "scissors"));
// console.log(rockPaperScissors("rock", "paper"));
// console.log(rockPaperScissors("scissors", "scissors"));
// console.log(rockPaperScissors("paper", "paper"));
// console.log(rockPaperScissors("rock", "rock"));
// console.log(rockPaperScissors("roc", "rock"));
// console.log(rockPaperScissors("rock", "ro"));
