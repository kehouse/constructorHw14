function Animal(options){
    var options = options || {};
    this.animal = options.animal || "Dolphin";
    this.speed = options.speed || 200;
    this.weight = options.weight || 1000;
    this.age = options.age || 20;
    this.smartness = options.smartness || 1;
    this.attack = function(predator){
      this.damage(predator);
    };
    this.damage = function(predator){
        if(predator.speed < this.speed){
          console.log(this.animal, "EAT YOU");
        } else {
          console.log("YOU TOO SLOW");
        }
      };

  this.getFood = function() {
    var fishyFood = new Food();
    if(this.speed > fishyFood.speed) {
      console.log("YUMMM");
      this.weight += 150;
    }
  };

  this.getCaptured = function(){
    var humanCapture = new Capture();
      if(this.weight > 100){
        console.log("sorry you have been captured.");
        this.age -= 5;
      } else {
        console.log("You are still free!!!!");
      }
    };

    this.equip = function (hobby, smartness) {
    this.hobby = new Hobby({hobby: hobby, smartness: smartness});
    console.log(this.animal + " just gained smartness with it's new hobby, " + this.hobby.hobby);
    this.smartness += 100;
  }
};

function Food(options){
  var options = options || {};
  this.speed = 2;
}

function Capture(options){
  var options = options || {};
  this.weight = 5;
}

function Hobby(options){
  var options = options || {};
  this.hobby = options.hobby || "fishing";
  this.smartness = options.smartness || 100;
}

var dolphin = new Animal({animal: "Dolphin", speed: 1000, weight: 1000, age: 20, smartness: 1000});
var seaTurtle = new Animal({animal: "Sea Turtle", speed: 15, weight: 200, age: 50, smartness: 5});
var jellyfish = new Animal({animal: "Jellyfish", speed: 5, weight: 5, age: 1, smartness: 2});
var mackerel = new Animal({animal: "Mackerel", speed: 15, weight: 10, age: 2, smartness: 5});
