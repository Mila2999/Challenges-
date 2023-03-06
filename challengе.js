'use strict';
/*
Challenge 1
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored */

/*
Challenge 2
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like 
this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }*/

/* Challenge 3
1. Create an array 'events' of the differen game events that happen (no dublicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log
3. Prient the folloving string to the console:'An event happend , on averege,every 9 minutes'
4. Lopp over the events and log them to the console marking whether  it's happen in the first half or second half (after 45 min)of game, like this:`[FIRST HALF] 17: '⚽️ GOAL`*/

const game = {
  team1: 'Brayern Munish',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martizen',
      'Alaba',
      'Davise',
      'Kishtov',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Levandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanja',
      'Hikimi',
      'Weigl',
      'Witcel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Levandowski', 'Gnarby', 'Levandowski', 'Hummels'],
  date: 'Feb 22th 2023',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// Challenge 3
//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend , on averege,every ${time / gameEvents.size} minutes`
);

//4
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

// Challenge 2
//1)
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  //   console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}
//bonus:
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// Challenge 1
//1) using destructuring arrays
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2) using the rest sintax
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)using spred operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4) addind new value to array
const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5)nested destructuring
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6) just using spread operator...
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davise', 'Muller', 'Levandowski', 'Kishtov');
printGoals('Davise', 'Muller');
printGoals(...game.scored);

// 7) short sircuts
team1 < team2 && console.log('Teame 1 is more likely to win');
team1 > team2 && console.log('Teame 2 is more likely to win');
