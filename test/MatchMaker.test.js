const assert = require('assert')
const Person = require('../models/Person')
const MatchMaker = require('../models/MatchMaker')
const Couple = require('../models/Couple')

describe('MatchMaker', function() {

    beforeEach(function() {

    });

    it('should return a Couple the matchmaker can find 2 persons that match', function() {
        bob = new Person('bob', 29, 'm', 'coding')
        jane = new Person('jane', 29, 'f', 'coding')
        matchMaker = new MatchMaker([bob, jane])
        
        assert.deepEqual(matchMaker.matchCouple(), new Couple(bob, jane))
    })

    it('should not return a Couple the matchmaker cannot find 2 persons that match', function() {
        bob = new Person('bob', 29, 'm', 'coding')
        tom  = new Person('jane', 29, 'm', 'coding')
        matchMaker = new MatchMaker([bob, tom])
        
        assert.equal(matchMaker.matchCouple(), null)
    })
})