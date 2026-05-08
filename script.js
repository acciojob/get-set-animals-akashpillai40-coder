// Base Animal class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log(`The ${this._species} makes a sound`);
  }
}

// Cat subclass
class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  // Cat-specific behavior
  purr() {
    console.log("purr");
  }
}

// Dog subclass
class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  // Dog-specific behavior
  bark() {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // The Siamese makes a sound
myCat.purr();      // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // The Golden Retriever makes a sound
myDog.bark();      // woof

