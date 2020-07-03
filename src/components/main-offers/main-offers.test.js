import React from 'react';
import renderer from 'react-test-renderer';
import MainOffers from './main-offers.jsx';

const EMPTY_HANDLER = () => {};
const CITY = {
  id: 0,
  title: `Amsterdam`,
  location: [1, 1],
  defaultZoom: 1
};
const APARTMENTS = [
  {
    id: 0,
    type: `Apartment`,
    description: `description0`,
    rating: 0.1,
    price: 1,
    isPremium: true,
    isFavourite: true,
    photo: `img0.jpg`,
    location: [1, 2],
  },
  {
    id: 1,
    type: `Private room`,
    description: `description1`,
    rating: 1,
    price: 2,
    isPremium: false,
    isFavourite: false,
    photo: `img1.jpg`,
    location: [3, 4],
  }
];

describe(`<MainOffers /> render suit`, () => {
  it(`<MainOffers /> render apartment list case`, () => {
    const generatedTree = renderer.create(
        <MainOffers
          activeCity={CITY}
          cityList={[CITY]}
          apartmentList={APARTMENTS}
          onApartmentTitleClick={EMPTY_HANDLER}
          onCityTitleClick={EMPTY_HANDLER}
        />,
        {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
    ).toJSON();

    expect(generatedTree).toMatchSnapshot();
  });
});