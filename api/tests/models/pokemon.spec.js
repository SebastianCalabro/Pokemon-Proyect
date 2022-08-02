const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
    it("It should throw an error if hp is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", hp: "asd" })
        .then(() => done(new Error("Hp is not a number")))
        .catch(() => done());
    });

    it("It should throw an error if attack is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", attack: "asd" })
        .then(() => done(new Error("Attack is not a number")))
        .catch(() => done());
    });

    it("It should throw an error if defense is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", defense: "asd" })
        .then(() => done(new Error("Defense is not a number")))
        .catch(() => done());
    });

    it("It should throw an error if speed is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", speed: "asd" })
        .then(() => done(new Error("Speed is not a number")))
        .catch(() => done());
    });

    it("It should throw an error if height is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", height: "asd" })
        .then(() => done(new Error("Height is not a number")))
        .catch(() => done());
    });

    it("It should throw an error if weight is not a number", (done) => {
      Pokemon.create({ name: "Pikachu", weight: "asd" })
        .then(() => done(new Error("Weight is not a number")))
        .catch(() => done());
    });
  });
});


