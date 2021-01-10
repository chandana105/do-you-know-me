const chalk = require('chalk')
const boxen = require('boxen')

let greeting = chalk.black.bgAnsi256(194).bold(`DO YOU KNOW ME?`)

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'classic',
  borderColor: 'green',
  backgroundColor: '#fff',
}

const msgBox = boxen(greeting, boxenOptions)

console.log(msgBox)

var readlineSync = require('readline-sync')
var score = 0
var userName = readlineSync.question('May I know your name please ?')
console.log(chalk.yellowBright.bold.italic('Welcome ' + userName.toUpperCase()))
console.log('\n')

function play(question, answer) {
  var userAns = readlineSync.question(question)

  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.cyanBright('YOU ARE RIGHT !! :)'))

    score++
  } else {
    console.log(chalk.redBright('YOU ARE WRONG !! :('))
  }
  console.log(chalk.yellowBright('Your Score', score))
  console.log('\n')
  console.log(chalk.greenBright('--------------'))
}

// play('wht u like? ', 'music');
// play('Are u optimistic?' , 'no');

// var questionOne = {
//   question :'wht u like? ',
//   answer :  'music'
// }

// var questionTwo = {
//   question :'Are u optimistic?',
//   answer :  'no'
// }

// var questions = [questionOne, questionTwo]

var questions = [
  {
    question: 'What do Chandana likes the most? : Travelling/Music ',
    answer: 'Music',
  },
  {
    question: `Who is Chandana's favorite Actor :Sharukh Khan/Akshay Kumar? :- SRK/AK `,
    answer: 'SRK',
  },
  {
    question: 'What type of Shopping do Chandana likes? :- Online/Traditional ',
    answer: 'Traditional',
  },
  {
    question: 'What do Chandana likes the most? :- Ghar Ka Khana/Junk Food ',
    answer: 'Ghar Ka Khana',
  },
  {
    question: `Chandana's favorite color? :- Pink/All `,
    answer: 'All',
  },
]

// this data to keep it with ourselves
var highScores = [
  {
    name: 'Channi',
    score: '4',
  },
  {
    name: 'Neha',
    score: '3',
  },
  {
    name: 'Nita',
    score: '3',
  },
]

for (i = 0; i < questions.length; i++) {
  var ques = questions[i]
  play(ques.question, ques.answer)
  //  highScores.push({name : userName, yourScore : score})
}

console.log('\n')
console.log(
  chalk.bold.greenBright(
    `${userName.toUpperCase()}, YOUR FINAL SCORE:- ${chalk.greenBright(score)}`
  )
)
console.log('\n')

console.log('-----------------------')
console.log('\n')

console.log('High Scores of other players are :- ')

// numbers.sort((a, b) => a - b);
var sortedArrayBasedOnScores = highScores.sort((a, b) => b.score - a.score)
// console.log(sortedArrayBasedOnScores)
for (i = 0; i < sortedArrayBasedOnScores.length; i++) {
  console.log(
    sortedArrayBasedOnScores[i].name,
    sortedArrayBasedOnScores[i].score
  )
}

// sortedarray gives us the high value of score with whch we can compare the current score
var topScore = sortedArrayBasedOnScores[0].score
// console.log(topScore)

function checkHighScore(currentScore) {
  if (currentScore > topScore || currentScore === 5) {
    console.log(
      chalk.yellowBright.bold(
        'Congratulations!! Pls send your screenshot as you had beaten up the Top score'
      )
    )
  } else {
    console.log(chalk.redBright(`Oops! You  haven't beaten up the Top Score.`))
    console.log(chalk.cyanBright('SEE YOU NEXT TIME :)'))
  }
}

checkHighScore(score)

// function checkHighScore(currentScore) {
//   for (i = 0; i < highScores.length ; i ++) {

// // if (currentScore >  highScores[i].score) {
// //   console.log('Congratulations!!, Pls send your screenshot as you had beaten the high score')
// // }
// }
// }

// checkHighScore(score);

//  for (i = 0; i < highScores.length ; i ++) {
//   if (highScores[i].score > highScores[i + 1].score) {
//     console.log('yes')
//   }
//  }
//  highScores.push({name : userName, score : score})

// console.log(' New Updated List of High Scores of  all players are :- ')
// for (i = 0; i < highScores.length ; i ++) {
//   // if (highScores[i].score > score) {
//   //   console.log('yes')
//   // }
// console.log(highScores[i].name, highScores[i].score)
// }

// var superMan = {
//   name :'SuperMan',
//   power : 'flight',
//   costumeColor : 'blue',
//   strength : 10000,
//   stealthh : 0,
//   inteligence : 100
// }

// // array of superhoer o objetts
// var superHero = [
//   superMan = {
//   name :'SuperMan',
//   power : 'flight',
//   costumeColor : 'blue',
//   strength : 10000,
//   stealthh : 0,
//   inteligence : 100
// },
// batMan = {
//   name :'BatMan',
//   power : 'fli',
//   costumeColor : 'black',
//   strength : 1000,
//   stealthh : 1,
//   inteligence : 10
// }

// ]

// console.log(superHero.length)

// function superHeroo(arr) {
//   for(i = 0; i < arr.length; i++) {
//     console.log(arr[i].name, arr[i].costumeColor)
//   }
// }

// superHeroo(superHero)
