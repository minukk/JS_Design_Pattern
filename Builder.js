function Shop() {
  this.construct = function(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

function CarBuilder() {
  this.car = null;
  
  this.step1 = function() {
    this.car = new Car();
  };
  
  this.step2 = function() {
    this.car.addParts();
  };
  
  this.get = function() {
    return this.car;
  };
}

function TruckBuilder() {
  this.truck = null;
  
  this.step1 = function() {
    this.truck = new Truck();
  };
  
  this.step2 = function() {
    this.truck.addParts();
  };
  
  this.get = function() {
    return this.truck;
  };
}

function Car() {
  this.doors = 0;
  
  this.addParts = function() {
    this.doors = 4;
  };
  
  this.say = function() {
    console.log("I am a " + this.doors + "-door car");
  };
}

function Truck() {
  this.doors = 0;
  
  this.addParts = function() {
    this.doors = 2;
  };
  
  this.say = function() {
    console.log("I am a " + this.doors + "-door truck"); 
  };
}

function run() {
  const shop = new Shop();
  const carBuilder = new CarBuilder();
  const truckBuilder = new TruckBuilder();
  const car = shop.construct(carBuilder);
  const truck = shop.construct(truckBuilder);
  
  car.say();
  truck.say();
}

run();