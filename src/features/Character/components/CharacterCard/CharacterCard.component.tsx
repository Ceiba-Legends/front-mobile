import React from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import { Character } from "src/models/";
import { StyleSheet } from "react-native";

class CharacterCardProps {
  character!: Character;
}

/**
 * Affiche une carte de personnage
 * @param props CharacterCardProps
 * @returns carte de personnage
 */
export default function CharacterCardComponent(props: CharacterCardProps) {
  const defaultImage =
    props.character.image ||
    "https://www.ancienthistorylists.com/wp-content/uploads/Tecun-Uman.jpg";

  /**
   * Coupe les descriptions trop longues
   * @param description Description à afficher
   * @returns Description coupée si nécessaire
   */
  const trimDescription = (description: string) => {
    if (description.length > 50) {
      return description.substring(0, 47) + "...";
    } else if (description.length === 0) {
      return "Ce personnage joué par " + props.character.player.name + "n'a pas de description";
    }
    return description;
  };

  return (
    <Card key={props.character.id} style={styles.card} mode="outlined">
      <Card.Title
        title={props.character.firstName}
        subtitle={`Joueur : ${props.character.player.name}`}
      />
      <Card.Cover source={{ uri: defaultImage }} style={styles.cover} />
      <Card.Content>
        <Paragraph> {trimDescription(props.character.description)} </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Afficher</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    margin: 10,
  },
  cover: {
    margin: 10,
    objectFit: "contain",
  },
});
