const Person = require('./models/Person')
const MatchMaker = require('./models/MatchMaker')

bob = new Person('bob', 29, 'm', 'coding')
jane = new Person('jane', 29, 'f', 'coding')
dick = new Person('dick', 18, 'm', 'bragging')
matchmaker = new MatchMaker([bob, jane, dick])

console.log(matchmaker.matchCouple())
// console.log(bob.isMatch(jane))