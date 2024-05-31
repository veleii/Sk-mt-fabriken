console.log("Welcome to fun-town, let's read some jokes!");
console.log('   ')
const jokes = [
  { joke: "Why don't programmers like nature?", punchline: "It has too many bugs." },
  { joke: "Why did the CSS developer go to therapy?", punchline: "To get rid of his margins." },
  { joke: "How do you comfort a JavaScript developer?", punchline: "You console them." },
  { joke: "Why did the CSS developer leave the restaurant?", punchline: "Because it had no class." },
  { joke: "Why did the JavaScript developer go missing?", punchline: "Because he didn't know when to return." },
  { joke: "Why did the HTML tag go to the party?", punchline: "Because it wanted to break the line." },
  { joke: "Why do JavaScript developers wear glasses?", punchline: "Because they don't C#." },
  { joke: "Why don't programmers like to use inline styles?", punchline: "Because they want to be classy." },
  { joke: "Why did the CSS selector break up with the HTML element?", punchline: "It found someone more specific." },
  { joke: "Why did the CSS developer apply for a job?", punchline: "They wanted to get a position." }
];

let jokeCounter = 1; 

function randomthenremove(jokes) {
  if (jokes.length < 2) {
    console.log('Not enough jokes left!');
    return;
  }

  let i1 = Math.floor(Math.random() * jokes.length);
  let joke1 = jokes[i1];
  jokes.splice(i1, 1);

  let i2 = Math.floor(Math.random() * jokes.length);
  let joke2 = jokes[i2];
  jokes.splice(i2, 1); 

  console.log(jokeCounter + ". " + joke1.joke);
  console.log(joke1.punchline);
  jokeCounter++;
  console.log('');  
  console.log(jokeCounter + ". " + joke2.joke);
  console.log(joke2.punchline);
  jokeCounter++;
}


randomthenremove(jokes);
console.log('   ');
console.log("Let's have some fun!");