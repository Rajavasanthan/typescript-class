abstract class Animal {
     name: string;
     age: number;
     breed: string;

     constructor(dogName: string) {
          this.name = dogName;
     }

     makeSound() {

     }
}

class Dog extends Animal {

     constructor(dogName: string) {
          super(dogName);
     }


     move(type: string) {

     }

}

class Elephant extends Animal {


     weight;


     walk() {

     }


}

let myDog = new Dog("Puupy");
console.log(myDog.name);