import { Player } from "../"

export default interface Character {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    player: Player;
    image: string;
}