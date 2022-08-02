import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import { Link } from "react-router-dom";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import NavBar from "./components/Navbar/Navbar.jsx";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
configure({ adapter: new Adapter() });

describe("<Nav />", () => {
  let nav;
  beforeEach(() => {
    nav = shallow(<NavBar />);
    expect(isReact.classComponent(NavBar)).toBeTruthy();
  });

  it('Debería renderizar dos <Link to="" />. El primero que vaya a "/home", y el segundo a "/create"', () => {
    expect(nav.find(Link).length).toBeGreaterThanOrEqual(2);
  });

  it('Debería tener un NavLink con el texto "Home" que cambie la ruta hacia "/home"', () => {
    expect(nav.find(Link).at(0).prop("to")).toEqual("/home");
    expect(nav.find(Link).at(0).text()).toEqual("Home");
  });

  it('Debería tener un Link con el texto "Create your pokemon" que cambie la ruta hacia "/create"', () => {
    expect(nav.find(NavLink).at(1).prop("to")).toEqual("/create");
    expect(nav.find(NavLink).at(1).text()).toEqual("Create your pokemon");
  });

});
