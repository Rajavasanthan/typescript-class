type Direction = "LEFT" | "RIGHT" | "FORWARD" | "REVERSE";
type LocationTime = "Morning" | "Evening";
type LocationPlace = "Chennai" | "Madurai";

interface CarLocation{
     time : LocationTime,
     location : LocationPlace
}

class Car{
     name;
     wheelsCount;
     brand;

     start(){

     }

     stop(){

     }

     move(direction:Direction){
          
     }

     goToLocation(shedule:[CarLocation]){
          shedule.forEach(element => {
               
          });
     }
}

let myAudi = new Car();
let myFord = new Car();

myAudi.move("LEFT");
myFord.move("RIGHT");

myAudi.goToLocation([
     {
          time : "Morning",
          location : "Chennai"
     }
]);