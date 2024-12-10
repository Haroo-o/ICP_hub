// Pokemon Class
class Pokemon {
    constructor(name, type, stats, moves) {
      this.name = name;
      this.type = type;
      this.stats = stats; // Object: { hp: 100, attack: 80, defense: 50, ... }
      this.moves = moves; // Array of move objects
      this.currentHp = this.stats.hp;
    }
  
    isFainted() {
      return this.currentHp <= 0;
    }
  
    receiveDamage(damage) {
      this.currentHp -= damage;
      if (this.currentHp < 0) {
        this.currentHp = 0; 
      }
    }
  }
  
  // Move Class
  class Move {
    constructor(name, type, power, accuracy) {
      this.name = name;
      this.type = type;
      this.power = power;
      this.accuracy = accuracy;
    }
  }
  
  // Example Pokémon
  const pikachu = new Pokemon(
    "Pikachu",
    "Electric",
    { hp: 35, attack: 55, defense: 40, specialAttack: 50, specialDefense: 50, speed: 90 },
    [
      new Move("Thunder Shock", "Electric", 40, 90),
      new Move("Quick Attack", "Electric", 40, 100)
    ]
  );
  
  const charmander = new Pokemon(
    "Charmander",
    "Fire",
    { hp: 39, attack: 52, defense: 43, specialAttack: 60, specialDefense: 50, speed: 65 },
    [
      new Move("Scratch", "Normal", 40, 100),
      new Move("Ember", "Fire", 40, 100)
    ]
  );
  
  // Simplified Battle Logic (without type effectiveness)
  function calculateDamage(attacker, defender, move) {
    // Simplified damage calculation (for demonstration)
    return Math.floor(Math.random() * move.power * (attacker.stats.attack / defender.stats.defense)); 
  }
  
  function battle(playerPokemon, opponentPokemon) {
    let currentTurn = Math.random() < 0.5 ? playerPokemon : opponentPokemon; 
  
    while (!playerPokemon.isFainted() && !opponentPokemon.isFainted()) {
      const attacker = currentTurn;
      const defender = currentTurn === playerPokemon ? opponentPokemon : playerPokemon;
  
      // Select a random move (for simplicity)
      const move = attacker.moves[Math.floor(Math.random() * attacker.moves.length)]; 
  
      const damage = calculateDamage(attacker, defender, move);
      defender.receiveDamage(damage);
  
      console.log(`${attacker.name} used ${move.name}!`);
      console.log(`${defender.name} took ${damage} damage.`);
  
      if (defender.isFainted()) {
        console.log(`${defender.name} fainted!`);
        break;
      }
  
      currentTurn = currentTurn === playerPokemon ? opponentPokemon : playerPokemon;
    }
  
    if (playerPokemon.isFainted()) {
      console.log(`${opponentPokemon.name} wins!`);
    } else {
      console.log(`${playerPokemon.name} wins!`);
    }
  }
  
  // Start the battle
  battle(pikachu, charmander);