import { charactersQuery } from "../../../../recoil/Character.recoil";
import React from "react";
import { useRecoilValue } from "recoil";
import { View, Text } from "react-native";

export default function CharacterListComponent() {
  const characters = useRecoilValue(charactersQuery);
  console.log("Character select page");
  console.log(characters);
  return (
    <View>
        {characters && characters.map((character) => (
            <Text key={character.id}>{character.firstName}</Text>
        ))}
        <Text>CharacterList.component charged</Text>
    </View>
  );
}
