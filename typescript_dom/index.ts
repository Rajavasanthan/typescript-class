class Animal {
     name;
     age;
     constructor(animalName){
          this.name = animalName;
     }
     makeSound() {

     }
}

class Cat extends Animal {

     constructor(catName){
          super(catName);
          let dogImg = document.createElement('img');
          dogImg.src = "https://cdn140.picsart.com/315680152041201.jpg?type=webp&to=crop&r=256&q=70";
          document.body.appendChild(dogImg);
          dogImg.onclick = () => {
               alert(`Hello My Name is ${this.name}`)
          }
     }


     move() {

     }
}


class Dog extends Animal {

     constructor(dogName){
          super(dogName);
          let catImg = document.createElement('img');
          catImg.src = "https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/61/4a/ef/614aef00-a490-dd70-8539-397f6525890b/source/256x256bb.jpg";
          document.body.appendChild(catImg);
          catImg.onclick = () => {
               alert(`Hello My Name is ${this.name}`)
          }
     }
     move() {

     }
}


let createCat = () => {
     var name = prompt("Cat Name?");
     let myCat = new Cat(name);
}

let createDog = () => {
     var name = prompt("Dog Name?");
     let myDog = new Dog(name);
}
