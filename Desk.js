/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Desk {
  constructor(
    // Defines parameters:
    name,
    color,
    height,
    laptop,
    pens,
    statue,
  ) {
    // Define properties:
    this.name = name;
    this.color = color;
    this.height = height;
    this.laptop = laptop;
    this.pens = pens;
    this.statue = statue;

  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export default Desk;