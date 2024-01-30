import {Suit} from "./Suit";
import {CardValue} from "./CardValue";

export class Card {
    suit: Suit;
    value: CardValue;

    constructor(suit: Suit, value: CardValue) {
        this.suit = suit;
        this.value = value;
    }
}