import { atom, selector } from "recoil";
import { Character } from "../models";
import { CharacterService } from "../services";

export const charactersState = atom<Character[]>({
  key: "charactersState",
  default: [],
});

export const charactersQuery = selector({
  key: "charactersQuery",
  get: () => {
    return CharacterService.findAll();
  },
});
