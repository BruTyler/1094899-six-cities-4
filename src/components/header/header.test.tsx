import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import Header from './header';
import AuthInfoMock from '../../mocks/authInfo';
import history from '../../history';
import {AuthInfo} from '../../types';

const auth: AuthInfo = AuthInfoMock;

describe(`<Header /> render suit`, () => {
  it(`<Header /> render case`, () => {
    const generatedTree = renderer.create(
        <Router history={history}>
          <Header authInfo={auth}/>
        </Router>
    ).toJSON();

    expect(generatedTree).toMatchSnapshot();
  });
});
