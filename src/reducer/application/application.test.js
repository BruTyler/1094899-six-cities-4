import {reducer, ActionCreator} from './application';
import {SortType} from '../../const';

describe(`Application reducer unit- suit`, () => {
  it(`Should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      cityId: null,
      apartmentId: null,
      sortType: SortType.POPULAR,
      isLoading: true,
      isOffline: false,
    });
  });

  it(`Should change city`, () => {
    expect(reducer({
      cityId: null,
    }, ActionCreator.changeCity(`someCityId`))
    ).toEqual({
      cityId: `someCityId`,
    });
  });

  it(`Should change sort type`, () => {
    expect(reducer({
      sortType: SortType.POPULAR,
    }, ActionCreator.changeSortType(SortType.TOP_RATED))
    ).toEqual({
      sortType: SortType.TOP_RATED,
    });
  });

  it(`Should set offline status`, () => {
    expect(reducer({
      isOffline: false,
    }, ActionCreator.setOffline()
    )).toEqual({
      isOffline: true,
    });
  });

  it(`Should change loading status`, () => {
    expect(reducer({
      isLoading: true,
    }, ActionCreator.changeLoadingStatus(false)
    )).toEqual({
      isLoading: false,
    });
  });

  it(`Should change apartment`, () => {
    expect(reducer({
      apartmentId: null,
    }, ActionCreator.changeApartment(1))
    ).toEqual({
      apartmentId: 1,
    });
  });
});
