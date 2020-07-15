import React from 'react';
import {mount} from 'enzyme';
import {MainOffers} from './main-offers.jsx';
import configureStore from 'redux-mock-store';
import {SortType} from '../../const.js';
import {Provider} from 'react-redux';
import NameSpace from '../../reducer/name-space.js';

const EMPTY_HANDLER = () => {};
const CITY = {
  id: `Amsterdam`,
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

const mockStore = configureStore();

describe(`<MainOffers /> e2e suite`, () => {
  it(`<MainOffers /> Apartment title is pressed`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        apartmentList: APARTMENTS,
        cityList: [CITY],
      },
      [NameSpace.APPLICATION]: {
        sortType: SortType.POPULAR,
        cityId: CITY.id,
      },
    });
    const onApartmentTitleMock = jest.fn();

    const mainOffersWrapper = mount(
        <Provider store={store}>
          <MainOffers
            activeCity={CITY}
            cityList={[CITY]}
            apartmentList={APARTMENTS}
            onApartmentTitleClick={onApartmentTitleMock}
            onCityTitleClick={EMPTY_HANDLER}
            onItemSelect={EMPTY_HANDLER}
          />
        </Provider>
    );

    const apartmentButtons = mainOffersWrapper.find(`.place-card__name > a`);
    const eventMock = {preventDefault() {}};
    apartmentButtons.at(0).simulate(`click`, eventMock);

    expect(apartmentButtons.length).toBe(2);
    expect(onApartmentTitleMock.mock.calls.length).toBe(1);
  });
});
