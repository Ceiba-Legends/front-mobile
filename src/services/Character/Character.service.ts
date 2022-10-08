import { Character } from "../../models";

class CharacterService {
  private apiUrl: string = process.env.CHARACTERS_URL || "http://localhost:8000/characters";

  /**
   * Fetch tous les personnages
   * @returns {Promise<Character[]>}
   */
  public async findAll(): Promise<Character[]> {
    const response = await fetch(this.apiUrl);
    return Promise.resolve(response.json());
  }

  /**
   * Retourne un personnage par son id
   * @param id identifiant du personnage
   * @returns 
   */
  public async findById(id: number): Promise<Character> {
    const response = await fetch(`${this.apiUrl}/${id}`);
    return Promise.resolve(response.json());
  }

  /**
   * Créé un nouveau personnage dans la BDD
   * @param character Personnage à créer
   * @returns 
   */
  public async create(character: Character): Promise<Character> {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    return Promise.resolve(response.json());
  }

  /**
   * Met à jour un personnage intégralement dans la BDD
   * @param character Personnage à mettre à jour
   * @returns 
   */
  public async replace(character: Character): Promise<Character> {
    const response = await fetch(`${this.apiUrl}/${character.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    return Promise.resolve(response.json());
  }

  /**
   * Met à jour une ou plusieurs propriétés d'un personnage
   * @param character Personnage à mettre à jour
   * @returns 
   */
  public async update(character: Character): Promise<Character> {
    const response = await fetch(`${this.apiUrl}/${character.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(character),
    });
    return Promise.resolve(response.json());
  }

  /**
   * Supprime un personnage dans la BDD
   * @param id Identifiant du personnage à supprimer
   */
  public async delete(id: number): Promise<void> {
    await fetch(`${this.apiUrl}/${id}`, {
      method: "DELETE",
    });
  }
}

export default Object.freeze(new CharacterService());
