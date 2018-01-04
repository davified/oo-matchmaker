const Couple = require('./Couple')
class MatchMaker {
    constructor(candidates) {
        this.candidates = candidates
    }

    matchCouple() {
        let candidate1 = this.candidates[0]
        let candidate2 = this.candidates[1]
        
        if (candidate1.isMatch(candidate2)) {
            return new Couple(candidate1, candidate2)
        } else {
            return null
        }
    }
}

module.exports = MatchMaker