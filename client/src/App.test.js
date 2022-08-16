/* import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import isReact from 'is-react';

import * as data from '../db.json';

import Create from '../src/components/Create/Create.jsx';

configure({ adapter: new Adapter() });

describe('<CreateProduct/>', () => {
   const state = { pokemons: data.pokemons };
   const mockStore = configureStore([thunk]);

   beforeAll(() => expect(isReact.classComponent(CreateProduct)).toBeFalsy());

   describe('Formulario de creación de producto', () => {
      let createPokemon;
      let store = mockStore(state);
      beforeEach(() => {
         createPokemon = mount(
            <Provider store={store}>
               <MemoryRouter initialEntries={['/create']}>
                  <Create />
               </MemoryRouter>
            </Provider>,
         );
      });

      it('Debe renderizar un formulario', () => {
         expect(createPokemon.find('form').length).toBe(1);
      });

      it('Debe renderizar un label para el nombre con el texto "Name: "', () => {
         expect(createPokemon.find('label').at(0).text()).toEqual('Name: ');
      });

      it('Debe renderizar un input para con la propiedad "name" igual a "name', () => {
         expect(createPokemon.find('input[name="name"]').length).toBe(1);
      });

      it('Debe renderizar un label para el precio con el texto "Price:', () => {
         expect(createPokemon.find('label').at(1).text()).toBe('Price: ');
      });

      it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "price"', () => {
         expect(createPokemon.find('input[name="price"]').length).toBe(1);
         expect(createPokemon.find('input[type="number"]').length).toBe(2);
      });
      it('Debe renderizar un label para la descripción con el texto "Description:', () => {
         expect(createPokemon.find('label').at(2).text()).toBe('Description: ');
      });
      it('Debe renderizar un textarea con la propiedad name igual a "description"', () => {
         expect(createPokemon.find('textarea[name="description"]').length).toBe(
            1,
         );
      });

      it('Debe renderizar in label para el stock con el texto "Stock: "', () => {
         expect(createPokemon.find('label').at(3).text()).toEqual('Stock: ');
      });
      it('Debe renderizar un input de tipo number para con la propiedad "name" igual a "stock', () => {
         expect(createPokemon.find('input[name="stock"]').length).toBe(1);
         expect(createPokemon.find('input[type="number"]').length).toBe(2);
      });

      it('Debería renderizar un input de button submit y con texto "Create Product"', () => {
         expect(createPokemon.find('button[type="submit"]').length).toBe(1);
         expect(createPokemon.find('button[type="submit"]').text()).toBe(
            'Create Product',
         );
      });
   });

   
}); */





/* import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import Nav from "./components/Navbar/Navbar.jsx";

configure({ adapter: new Adapter() });
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


describe("<Nav />", () => {
  let nav;
  beforeEach(() => {
    nav = shallow(<Nav />);
    expect(isReact.functionComponent(Nav)).toBeTruthy();
  });

  it('Debería renderizar dos <Link to="" />. El primero que vaya a "/home", y el segundo a "/create"', () => {
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(2);
  });

  it('Debería tener un Link con el texto "Home" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(Link).at(0).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(0).text()).toEqual("Home");
  });

  it('Debería tener un Link con el texto "Create your pokemon" que cambie la ruta hacia "/create"', () => {
    expect(nav.find(Link).at(1).prop("to")).toEqual("/create");
    expect(nav.find(Link).at(1).text()).toEqual("Create your pokemon");
  });

}); */
