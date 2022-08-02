/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Pokemon, conn } = require('../../src/db.js');

const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

describe('Pokemon routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Pokemon.sync({ force: true })
    .then(() => Pokemon.create(pokemon)));

describe("Types routes", () => {
  describe("GET /types", () => {
    it("expect response 200", () => agent.get("/types").expect(200));
  });
});

describe("recieve a pokemon using id", () => {
  describe("GET /pokemons/:id", () => {
    it("expect 200 passing id", () =>
      agent.get("/pokemons/10").expect(200));
  });
  describe("GET /pokemons?name=xxx", () => {
    it("if recieves name response 200", () =>
      agent.get("/pokemons?name=pikachu"));
  });
});})
