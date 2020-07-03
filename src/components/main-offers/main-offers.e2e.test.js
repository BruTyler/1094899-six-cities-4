import React from 'react';
import {mount} from 'enzyme';
import MainOffers from './main-offers.jsx';

const EMPTY_HANDLER = () => {};
const CITY = {
  id: 0,
  title: `Amsterdam`,
  location: [1, 1],
  defaultZoom: 1,
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
    location: [1, 1],
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
    location: [1, 1],
  }
];

describe(`<MainOffers /> e2e suite`, () => {
  it(`<MainOffers /> Apartment title is pressed`, () => {
    const onApartmentTitleHandler = jest.fn();

    const mainOffersWrapper = mount(
        <MainOffers
          activeCity={CITY}
          cityList={[CITY]}
          apartmentList={APARTMENTS}
          onApartmentTitleClick={onApartmentTitleHandler}
          onCityTitleClick={EMPTY_HANDLER}
        />
    );

    const apartmentButtons = mainOffersWrapper.find(`.place-card__name > a`);
    const eventMock = {preventDefault() {}};
    apartmentButtons.at(0).simulate(`click`, eventMock);

    expect(apartmentButtons.length).toBe(2);
    expect(onApartmentTitleHandler.mock.calls.length).toBe(1);
  });
});