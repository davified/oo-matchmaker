// models a person being matchmade
class Person {
  constructor(name, age, gender, hobby) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.hobby = hobby;
  }

  isMatch(otherPerson) {
      return this.gender !== otherPerson.gender && this.hobby === otherPerson.hobby
  }
}

module.exports = Person