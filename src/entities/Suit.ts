import {CardColour} from "./CardColour";
import {SuitName} from "./SuitName";

export class Suit {
    colour: CardColour
    name: SuitName

    constructor(colour: CardColour, name: SuitName) {
        this.colour = colour;
        this.name = name
    }
}
