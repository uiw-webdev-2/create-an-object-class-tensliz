/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Desk from "./Desk.js";

const workStation = new Desk(
  "Liz's Desk",
  "White",
  30,
  "Macbook",
  5,
  "Minecraft Bee",
);

const content = `<main>
<article>
  <h1>${workStation.name}</h1>
  <ul>
    <li>Color: ${workStation.color}</li>
    <li>Height: ${workStation.height}</li>
    <li>Laptop brand: ${workStation.laptop}</li>
    <li>How many pens? ${workStation.pens}</li>
    <li>What kind of statue? ${workStation.statue}</li>
  </ul>
</article>
</main>`;

document.body.innerHTML = content;