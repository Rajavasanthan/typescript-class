var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(animalName) {
        this.name = animalName;
    }
    Animal.prototype.makeSound = function () {
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(catName) {
        var _this = _super.call(this, catName) || this;
        var dogImg = document.createElement('img');
        dogImg.src = "https://cdn140.picsart.com/315680152041201.jpg?type=webp&to=crop&r=256&q=70";
        document.body.appendChild(dogImg);
        dogImg.onclick = function () {
            alert("Hello My Name is " + _this.name);
        };
        return _this;
    }
    Cat.prototype.move = function () {
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(dogName) {
        var _this = _super.call(this, dogName) || this;
        var catImg = document.createElement('img');
        catImg.src = "https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/61/4a/ef/614aef00-a490-dd70-8539-397f6525890b/source/256x256bb.jpg";
        document.body.appendChild(catImg);
        catImg.onclick = function () {
            alert("Hello My Name is " + _this.name);
        };
        return _this;
    }
    Dog.prototype.move = function () {
    };
    return Dog;
}(Animal));
var createCat = function () {
    var name = prompt("Cat Name?");
    var myCat = new Cat(name);
};
var createDog = function () {
    var name = prompt("Dog Name?");
    var myDog = new Dog(name);
};
