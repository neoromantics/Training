interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = <T extends Animal>(animal: T): string => {
  let speed;
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
  return `Moving at speed: ${speed}`;
};

// Usage
const bird: Bird = { type: 'bird', flyingSpeed: 10 };
const horse: Horse = { type: 'horse', runningSpeed: 20 };

const birdMovement = moveAnimal(bird); // "Moving at speed: 10"
const horseMovement = moveAnimal(horse); // "Moving at speed: 20"

console.log(birdMovement);
console.log(horseMovement);
