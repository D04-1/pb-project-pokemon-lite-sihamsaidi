class Pokemon {
  constructor(name, gesundheit, magie) {
    (this.name = name),
      (this.gesundheit = gesundheit),
      (this.magie = magie),
      (this.fähigkeiten = []);
  }
  learnAttackSkill(skills) {
    this.fähigkeiten.push(skills);
    console.log(this);
  }
  showStatus() {
    console.log(`${this.name} hat ${this.gesundheit} und ${this.magie}`);
  }
  attack(index, gegner) {
    let attack = this.fähigkeiten[index];
    if (attack.magieMenge > this.magie) {
      console.log(`${gegner.name} hat Gewonnen`);
      return `${gegner} hat Gewonnen`;
    }
    if (gegner.gesundheit <= 0) {
      console.log(`${this.name} ist schon tod!`);
      return;
    }
    if (this.gesundheit <= 0) {
      console.log(`${this.name} ist schon tod`);
    }
    gegner.gesundheit = gegner.gesundheit - attack.damage;
    this.magie = this.magie - attack.magieMenge;
    console.log(`${this.magie} hat nicht gereischt`);
  }
  getMagic() {
    let randomMagic = Math.floor(Math.random() * 10) + 20;

    this.magie += randomMagic;
    console.log(
      `${this.name} hat ${randomMagic} magiesche punkte zurück bekommen`
    );
    console.log();
  }
}
class AttackSkill {
  constructor(attackName, damage, magieMenge) {
    (this.attackName = attackName),
      (this.damage = damage),
      (this.magieMenge = magieMenge);
  }
}

let pikachu = new Pokemon("pikachu", 120, 80);

let bulbasaur = new Pokemon("bulbasaur", 95, 105);
let blitz = new AttackSkill("blitz", 40, 30);
let poisonSeed = new AttackSkill("Giftsamen", 20, 20);

pikachu.learnAttackSkill(blitz);

bulbasaur.learnAttackSkill(poisonSeed);

pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
pikachu.showStatus();
bulbasaur.showStatus();
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);
pikachu.getMagic();
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);
