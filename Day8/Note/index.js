var moveAnimal = function (animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
    }
    return "Moving at speed: ".concat(speed);
};
// Usage
var bird = { type: 'bird', flyingSpeed: 10 };
var horse = { type: 'horse', runningSpeed: 20 };
var birdMovement = moveAnimal(bird); // "Moving at speed: 10"
var horseMovement = moveAnimal(horse); // "Moving at speed: 20"
console.log(birdMovement);
console.log(horseMovement);
