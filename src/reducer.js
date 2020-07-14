import CitiesMock from './mocks/cities.js';
import ApartmentContentMock from './mocks/offers.js';
import {extend, getItemById} from './utils.js';
import {SortType} from './const.js';

const DEFAULT_CITY_ID = 0;

const initialState = {
  city: getItemById(CitiesMock, DEFAULT_CITY_ID),
  cityList: CitiesMock,
  apartmentList: ApartmentContentMock.filter((x) => x.cityId === DEFAULT_CITY_ID),
  sortType: SortType.POPULAR,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (cityId) => {
    return {
      type: ActionType.CHANGE_CITY,
      payload: cityId,
    };
  },
  changeSortType: (selectedType) => {
    return {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: selectedType,
    };
  },
};

const filterPlaces = (oldPlaces, sortType) => {
  const places = oldPlaces.slice(0);
  switch (sortType) {
    case SortType.PRICE_LOW:
      return places.sort((a, b) => a.price - b.price);
    case SortType.PRICE_HIGH:
      return places.sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return places.sort((a, b) => Number(b.rating) - Number(a.rating));
    default:
      return places.sort((a, b) => a.id - b.id);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      let updatedApartList = ApartmentContentMock.filter((x) => x.cityId === action.payload);
      updatedApartList = filterPlaces(updatedApartList, state.sortType);
      return extend(state, {
        city: getItemById(CitiesMock, action.payload),
        apartmentList: updatedApartList,
      });
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
        apartmentList: filterPlaces(state.apartmentList, action.payload),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
