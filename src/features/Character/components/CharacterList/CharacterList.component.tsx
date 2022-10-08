import React from "react";
import { charactersQuery } from "../../../../recoil/Character.recoil";
import { useRecoilValue } from "recoil";
import { View, StyleSheet } from "react-native";
import CharacterCardComponent from "../CharacterCard/CharacterCard.component";

export default function CharacterListComponent() {
  const characters = useRecoilValue(charactersQuery);
  return (
    <View style={styles.container}>
        {characters && characters.map((character) => (
            <CharacterCardComponent character={character} key={character.id} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
