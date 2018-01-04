const assert = require('assert')
const Person = require('../models/Person')

describe('Person', function() {
    it('should return true for persons with opposite gender and identical hobbies', function() {
        bob = new Person('bob', 29, 'm', 'coding')
        jane = new Person('jane', 29, 'f', 'coding')

        assert.equal(bob.isMatch(jane), true)
    })

    it('should return false for persons with same gender', function() {
        bob = new Person('bob', 29, 'm', 'coding')
        tom = new Person('tom', 29, 'm', 'coding')

        assert.equal(bob.isMatch(tom), false)
    })

    it('should return false for persons with different hobbies', function() {
        bob = new Person('bob', 29, 'm', 'coding')
        jane = new Person('tom', 29, 'f', 'fishing')
        
        assert.equal(bob.isMatch(jane), false)
    })
})