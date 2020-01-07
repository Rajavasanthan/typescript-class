type Direction = "LEFT" | "RIGHT" | "FRONT" | "BACK";
type TimeData = "Morning" | "Evening"
interface LocationData {
     time: TimeData,
     lat: number,
     long: number
}

class Car {
     brand;
     name;
     color;

     start() {

     }

     stop() {

     }

     move(direction: Direction) {
          if (direction == "LEFT") {
               console.log(`The car is moving in ${direction} Direction`)
          }

          if (direction == "RIGHT") {
               console.log(`The car is moving in ${direction} Direction`)
          }
     }

     location(locationData: [LocationData]) {
          // console.log(`This car is now in ${locationData.time}`);
          locationData.forEach(element => {
               
          });
     }
}



let myCar = new Car();

myCar.move("LEFT")
myCar.location([
     {
          time: "Morning",
          lat: -13.9,
          long: 45.56
     }
])